"use client";
import { useState, useEffect, useRef } from "react";
import TransferBookingForm from "@/components/TransferBookingForm";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { initialOptions } from "@/app/api/api";

export default function TransferClient() {
    const [transferBookingFormHeight, setTransferBookingFormHeight] = useState(0);
    const transferBookingFormRef = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setTransferBookingFormHeight(entry.contentRect.height);
            }
        });

        if (transferBookingFormRef.current) {
            observer.observe(transferBookingFormRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (

        <div id="transferForm"
            style={{ height: transferBookingFormHeight + 100 }}
            className="w-full h-dvh flex items-center justify-center">
            <div className="w-full md:w-1/2 p-1 ">
                <PayPalScriptProvider options={initialOptions}>
                    <TransferBookingForm ref={transferBookingFormRef} />
                </PayPalScriptProvider>

            </div>
        </div>
    )
}