import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";

export default function BookinFormPayment({ createOrder, onApprove }) {

    // Usa lo stato di caricamento PayPal qui
    const [{ isPending }] = usePayPalScriptReducer();

    return (
        <>
            {isPending ? (
                <p className='uppercase'>Caricamento…</p>
            ) : (
                <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={(error) => {
                        console.error("Errore PayPal:", error);
                        alert("Si è verificato un errore durante il pagamento. Riprova o contatta l’assistenza.");
                    }}
                />
            )}
        </>
    );
}