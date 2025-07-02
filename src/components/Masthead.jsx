import { usePathname } from 'next/navigation';

export default function Masthead({ title }) {
    const pathname = usePathname();
    const mastHeight = pathname === '/' ? 'h-[80vh]' : 'h-[40vh]';

    return (
        <div id="masthead" className={`w-full ${mastHeight}`}>
            <div id="mastText" className="flex items-center justify-center" style={{ height: 'calc(100% + 100px)' }}>
                <h2 className="text-2xl md:text-6xl text-center text-white drop-shadow-2xl">{title}</h2>
            </div>
        </div>
    );
}