"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("cookie_consent");
      if (!consent) setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/80 text-white p-6 z-[1000] flex flex-col items-center">
      <span className="mb-2 text-center text-white">
        Questo sito utilizza cookie tecnici e di terze parti per migliorare
        l'esperienza utente. Proseguendo accetti la{" "}
        <a
          href="/terms-and-conditions"
          className="underline text-white"
        >
          cookie policy
        </a>
        .
      </span>
      <button
        onClick={acceptCookies}
        className="bg-c text-white rounded px-6 py-2 font-bold mt-2 hover:bg-c/80 transition"
      >
        Accetta
      </button>
    </div>
  );
}
