import { getLabel } from '../../utils/labels';
import Link from "next/link";
import ClientLayout from "@/components/ClientLayout";
import HomeClient from "@/components/HomeClient";
import seoData from "../../utils/seoData";

 export const metadata = {
      title: seoData["/"].title,
      description: seoData["/"].description,
  };

export default function Home() {

  const items = [
    {
      image: "./taxi.png",
      title: getLabel("transferTitle"),
      body: getLabel("transferBody"),
    },
    {
      image: "./ship.png",
      title: getLabel("favignanaTitle"),
      body: getLabel("favignanaBody"),
    },
    {
      image: "./card.png",
      title: getLabel("paymentTitle"),
      body: getLabel("paymentBody"),
    },
  ]

  return (
    <>
      <ClientLayout>

      <HomeClient />

      <div id="callToAction" className="relative h-[120vh] md:h-[80vh]">

        <div id="floater" className="md:absolute bg-a p-8 md:p-4 shadow-2xl">

          <p className="mb-2">{getLabel("CTAAbstract")}</p>
          <h2 className="text-2xl mb-3">{getLabel("CTATitle")}</h2>
          <p className="mb-4">{getLabel("CTABody")}</p>

          <Link className="inline-block bg-c p-4 uppercase text-a" href="/transfer">
            {getLabel("CTAButton")}
          </Link>

        </div>

        <div id="floater2" className="md:absolute bg-a p-8 md:p-4 shadow-2xl">

          <p className="mb-2">{getLabel("CTAAbstract2")}</p>
          <h2 className="text-2xl mb-3">{getLabel("CTATitle2")}</h2>
          <p className="mb-4">{getLabel("CTABody2")}</p>

          <Link className="inline-block bg-c p-4 uppercase text-a" href="/excursion">
            {getLabel("CTAButton2")}
          </Link>

        </div>


      </div>

      <div id="description" className="w-full grid grid-cols-1 md:grid-cols-2">
        <div className="p-10">
          {items.map((item, index) => (
            <div key={index} className="flex justify-start items-start mb-10 flex-col md:flex-row">
              <div className="bg-b p-5 w-32 h-32 mx-auto md:mx-0">
                <img src={item.image} alt={item.image} />
              </div>
              <div className="ms-3 md:w-1/2">
                <h4 className="text-2xl">{item.title}</h4>
                <p className="text-xs">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center md:relative">
          <div className="w-1/8 h-full hidden md:block"></div>
          <div className="w-full md:w-7/8 md:h-3/4 p-15 flex items-center justify-center md:flex-none" id="descImg">
            <div className="md:absolute bg-white w-90 flex flex-col items-center justify-center p-10 top-30 -left-15 shadow-2xl">
              <h4 className="text-4xl mb-3 text-center">{getLabel("descTitle")}</h4>
              <p className="text-center">{getLabel("descBody")}</p>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout >
    </>
  );
}

