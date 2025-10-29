import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLabel } from '../../utils/labels';


export default function Navbar() {
    const pathname = usePathname();

    const activeClass = "text-blue-800 font-bold capitalize";
    const inactiveClass = "text-b capitalize";


    const text = [
        {
            link: "/",
            name: getLabel("home"),
        },
        {
            link: "/transfer",
            name: getLabel("transfer"),
        },
        {
            link: "/excursion",
            name: getLabel("excursion"),
        },
        {
            link: "/contact",
            name: getLabel("contactUs"),
        },
        {
            link: "/blog",
            name: getLabel('blog'),
        }
    ];

    return (
        <>
            <div className='absolute flex justify-center items-center z-10 bg-gray-200/35 w-full'>
                {/* LOGO SINISTRA visibile solo su schermo grande */}
                <Link title="Torna alla Home" href="/">
                    <img className='hidden md:block md:max-w-25 max-w-10 md:me-10' src="/logo-no-background.png" alt="mg-transfer-logo" />
                </Link>

                <div className="h-24 top-0 left-0 flex justify-center items-center flex-col">
                    <div>
                        <div className='flex justify-center items-center'>
                            {/* LOGO PICCOLO visibile solo su schermo piccolo */}
                            <img className='block md:hidden max-w-10 me-1' src="./logo-no-background.png" alt="mg-transfer-logo" />

                            <h1 className="text-3xl text-a text-center">Favignana Transfer</h1>

                            {/* SPAZIO VUOTO visibile solo su schermo piccolo, invisibile ma prende spazio */}
                            <img className='invisible block md:hidden max-w-10 ms-1' src="./logo-no-background.png" alt="" />
                        </div>
                        <div>
                            <ul className="flex justify-center items-center space-x-4">
                                {text.map((item, index) => (
                                    <li key={index}>
                                        <Link title={`Vai a  ${item.link}`}
                                            href={item.link}
                                            className={pathname === item.link ? activeClass : inactiveClass}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* LOGO DESTRA visibile solo su schermo grande */}
                <img className='hidden md:block md:invisible md:max-w-25 max-w-10 md:ms-10' src="./logo-no-background.png" alt="" />
            </div>
        </>
    );
}