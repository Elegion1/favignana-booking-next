import { useRef, forwardRef } from "react";
import { getLabel } from "../../utils/labels";
import Link from "next/link";

const Info = forwardRef((props, ref) => {
    const infoRef = ref || useRef(null);

    let items = [
        {
            image: './taxi.png',
            title: getLabel("taxiInfoTitle"),
            body: getLabel("taxiInfoBody"),
            link: "/transfer",
        },
        {
            image: './ship.png',
            title: getLabel("shipInfoTitle"),
            body: getLabel("shipInfoBody"),
            link: "/transfer",
        },
        {
            image: './excursion-logo.png',
            title: getLabel("excursionInfoTitle"),
            body: getLabel("excursionInfoBody"),
            link: "/excursion",
        },
    ];

    return (
        <div ref={infoRef} id="info" className="w-full absolute flex justify-center items-center md:my-10">
            <div className="w-7/8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {items.map(({ image, title, body, link }, index) => (
                        <Link key={index} title={`Vai a ${title}`} href={link} passHref legacyBehavior>
                            <a className="flex flex-col p-5 text-white items-center justify-start bg-c shadow-lg focus:outline-none focus:ring-2 focus:ring-c">
                                <div className="bg-d rounded-full p-5 mb-5">
                                    <img src={image} id="icon" alt={title} />
                                </div>
                                <h3 className="text-center text-4xl">{title}</h3>
                                <p className="text-center mt-2">{body}</p>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
});

export default Info;