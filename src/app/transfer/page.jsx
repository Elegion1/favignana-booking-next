import { getLabel } from "../../../utils/labels";
import ClientLayout from "../../components/ClientLayout";
import seoData from "../../../utils/seoData";
import TransferClient from "../../components/TransferClient";

export const metadata = {
    title: seoData["/transfer"].title,
    description: seoData["/transfer"].description,
};

export default function Transfer() {
 

    return (
        <>
            <ClientLayout>

                <div id="transferInfo" className="p-10">
                    <p className="md:px-30 text-justify mb-5">
                        {getLabel("transferDescription")}
                    </p>
                    <h6 className="text-3xl text-center mt-5 uppercase text-e">{getLabel("discountPolicy")}</h6>
                </div>

                <TransferClient />

            </ClientLayout>
        </>
    )
}