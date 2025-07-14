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
    const { value, type, description, passengers, custom_id } = body;

    // Validazione base
    if (!value || isNaN(Number(value)) || Number(value) <= 0) {
      return NextResponse.json(
        { error: "Importo non valido" },
        { status: 400 }
      );
    }

    if (!custom_id || typeof custom_id !== "string") {
      return NextResponse.json(
        { error: "custom_id mancante" },
        { status: 400 }
      );
    }

    const accessToken = await getPayPalAccessToken();
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://api-m.paypal.com/v2/checkout/orders"
        : "https://api-m.sandbox.paypal.com/v2/checkout/orders";

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            reference_id: `ORD-${Date.now()}`, // facoltativo ma utile
            custom_id: custom_id, // per riferimento interno
            invoice_id: `FATT-${Date.now()}`, // codice fattura, opzionale
            amount: {
              currency_code: "EUR",
              value: value.toString(),
              breakdown: {
                item_total: {
                  currency_code: "EUR",
                  value: value.toString(),
                },
              },
            },
          },
        ],
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || "Errore PayPal" },
        { status: 500 }
      );
    }
    return NextResponse.json({ id: data.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
