import { FaSearch } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";
import NavbarOffCanvas from "./NavbarOffCanvas";
import SearchOffCanvas from "./SearchOffCanvas";

export default function Navbar() {
    return (
        <>
            <nav className="flex flex-row items-center justify-between py-4">
                <div>
                    <img src="images/header-logo.png" alt="logo" />
                </div>
                <ul className="flex flex-row items-center gap-8">
                    <li className="hidden md:block text-white uppercase">
                        <a href="#about">About</a>
                    </li>
                    <li className="hidden md:block text-white uppercase">
                        <a href="#services">Services</a>
                    </li>
                    <li className="hidden md:block text-white uppercase">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="text-white uppercase">
                        <button
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#SearchOffCanvas"
                            aria-controls="SearchOffCanvas"
                        >
                            <FaSearch />
                        </button>
                    </li>
                    <li
                        data-bs-toggle="offcanvas"
                        href="#NavbarOffCanvas"
                        role="button"
                        className="text-white uppercase p-1.5 border border-white rounded-full"
                    >
                        <HiBars3 className="w-6 h-6" />
                    </li>
                </ul>
            </nav>
            <NavbarOffCanvas />
            <SearchOffCanvas />
        </>
    );
}
