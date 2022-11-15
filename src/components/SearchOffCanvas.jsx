import { HiXMark } from "react-icons/hi2";

export default function SearchOffCanvas() {
    return (
        <div
            class="offcanvas offcanvas-top overflow-hidden fixed bottom-0 flex flex-col max-w-full bg-gradient-to-tr from-[#a0e001] to-[#24a227] invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 right-0 border-none h-1/6"
            tabIndex="-1"
            id="SearchOffCanvas"
            aria-labelledby="offcanvasTopLabel"
        >
            <div class="offcanvas-header flex items-center justify-between px-6 md:px-12 h-full">
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-white w-full focus:outline-none text-2xl placeholder:text-white placeholder:text-opacity-80"
                />
                <button
                    type="button"
                    class="box-content p-2 text-white border-none rounded-none focus:shadow-none focus:outline-none focus:opacity-100"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                >
                    <HiXMark className="w-10 h-10" />
                </button>
            </div>
        </div>
    );
}
