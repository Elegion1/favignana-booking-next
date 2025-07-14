import { NextResponse } from "next/server";

// Funzione per ottenere l'access token PayPal
async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const base64 = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const url =
    process.env.NODE_ENV === "production"
      ? "https://api-m.paypal.com/v1/oauth2/token"
      : "https://api-m.sandbox.paypal.com/v1/oauth2/token";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const data = await res.json();
  if (!data.access_token)
    throw new Error("Impossibile ottenere access token PayPal");
  return data.access_token;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { orderID } = body;
    if (!orderID) {
      return NextResponse.json({ error: "orderID mancante" }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? `https://api-m.paypal.com/v2/checkout/orders/${orderID}/capture`
        : `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`;

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Errore PayPal" },
        { status: 500 }
      );
    }
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
