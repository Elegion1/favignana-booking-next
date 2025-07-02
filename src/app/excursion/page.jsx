import { getLabel } from "../../../utils/labels";
import ClientLayout from "@/components/ClientLayout";
import ExcursionClient from "@/components/ExcursionClient";
import seoData from "../../../utils/seoData";

export const metadata = {
    title: seoData["/excursion"].title,
    description: seoData["/excursion"].description,
};

export default function Excursion() {

    return (
        <>
            <ClientLayout>

                <div id="excursionInfo" className="p-10">
                    <p className="md:px-30 text-justify">
                        {getLabel('excursionDescription')}
                    </p>
                </div>

                <ExcursionClient />
            </ClientLayout>
        </>
    );
}