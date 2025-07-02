"use client";
import { useState, useEffect, useRef } from "react";
import ExcursionBookingForm from "@/components/ExcurisonBookingForm";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { getLabel } from "../../../utils/labels";
import ClientLayout from "@/components/ClientLayout";

export default function Excursion() {
    const [excursionBookingFormHeight, setExcursionBookingFormHeight] = useState(0);
    const excursionBookingFormRef = useRef(null);

    const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    
    const initialOptions = {
        "client-id": clientID,
        currency: "EUR",
        intent: "capture",
    };

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setExcursionBookingFormHeight(entry.contentRect.height);
            }
        });

        if (excursionBookingFormRef.current) {
            observer.observe(excursionBookingFormRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <ClientLayout>

                <div id="excursionInfo" className="p-10">
                    <p className="md:px-30 text-justify">
                        {getLabel('excursionDescription')}
                    </p>
                </div>

                <div id="excursionForm" style={{ height: excursionBookingFormHeight + 100 }} className="w-full h-dvh flex items-center justify-center">

                    <div className="w-full md:w-1/2 px-1 py-20">
                        <PayPalScriptProvider options={initialOptions}>
                            <ExcursionBookingForm ref={excursionBookingFormRef} />
                        </PayPalScriptProvider>
                    </div>
                </div>
            </ClientLayout>
        </>
    );
}