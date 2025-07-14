"use client";
import { useState, useEffect, useRef } from "react";
import ExcursionBookingForm from "@/components/ExcurisonBookingForm";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "@/app/api/api";

export default function TransferClient() {
    const [excursionBookingFormHeight, setExcursionBookingFormHeight] = useState(0);
    const excursionBookingFormRef = useRef(null);

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
        <div id="excursionForm" style={{ height: excursionBookingFormHeight + 100 }} className="w-full h-dvh flex items-center justify-center">

            <div className="w-full md:w-1/2 px-1 py-20">
                <PayPalScriptProvider options={initialOptions}>
                    <ExcursionBookingForm ref={excursionBookingFormRef} />
                </PayPalScriptProvider>
            </div>
        </div >
    )
}