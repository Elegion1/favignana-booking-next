"use client";
import { useState, useEffect, useRef } from "react";
import Info from "@/components/Info";

export default function HomeCLient() {
    const [infoHeight, setInfoHeight] = useState(0);
    const infoRef = useRef(null);
    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setInfoHeight(entry.contentRect.height);
            }
        });

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <Info ref={infoRef} />

            <div id="space" style={{ height: infoHeight - 80 }}></div>
        </>
    )
}