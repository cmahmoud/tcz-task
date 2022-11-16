import { HiXMark } from "react-icons/hi2";

export default function NavbarOffCanvas() {
    return (
        <div className="flex space-x-2">
            <div>
                <div
                    className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-gradient-to-tr from-[#a0e001] to-[#24a227] invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-full"
                    tabIndex="-1"
                    id="NavbarOffCanvas"
                    aria-labelledby="offcanvasExampleLabel"
                >
                    <div className="offcanvas-header flex justify-between px-8 md:px-24 py-10">
                        <ul className="flex flex-col gap-4 font-slab font-light text-2xl uppercase text-white">
                            <li>
                                <a href="#about">about</a>
                            </li>
                            <li>
                                <a href="#services">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#about">Address</a>
                            </li>
                            <li>
                                <a href="#about">Contact</a>
                            </li>
                        </ul>
                        <button
                            type="button"
                            className="box-content w-4 h-4 p-2 text-white border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        >
                            <HiXMark className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
