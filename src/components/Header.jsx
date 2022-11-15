import Navbar from "./Navbar";

export default function Header() {
    return (
        <header
            className="header h-full overflow-auto mb-16"
            style={{
                backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/banner.png"
                })`,
            }}
        >
            <div className="container mx-auto px-4 md:px-16">
                <Navbar />
                <section className="mt-16 mb-12 text-white">
                    <h2 className="text-center text-3xl md:text-4xl mb-4">
                        Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text-center mb-4 mx-auto font-light">
                        Proin bibendum placerat libero a porttitor. Donec
                        vestibulum at augue venenatis aliquam.
                        <br className="hidden md:block" />
                        Donec dolor elit, lacinia nec purus eget, fringilla
                        fringilla massa.
                    </p>
                    <p className="text-center mx-auto font-light">
                        Phasellus congue metus vel lorem faucibus, eget
                        vulputate elit iaculis.
                    </p>
                </section>
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-40 mb-16">
                    <div className="flex flex-col items-center justify-between gap-4 py-8 bg-white rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="66"
                            height="60"
                            viewBox="0 0 66 60"
                        >
                            <image
                                width="66"
                                height="60"
                                xlinkHref="data:img/png;base64,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"
                            />
                        </svg>
                        <h3 className="text-2xl text-[#7c7c7c] font-slab">
                            Chat
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 py-8 bg-white rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                        >
                            <image
                                width="60"
                                height="60"
                                xlinkHref="data:img/png;base64,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"
                            />
                        </svg>
                        <h3 className="text-2xl text-[#7c7c7c] font-slab">
                            Call
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 py-8 bg-white rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="46"
                            viewBox="0 0 60 46"
                        >
                            <image
                                width="60"
                                height="46"
                                xlinkHref="data:img/png;base64,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"
                            />
                        </svg>

                        <h3 className="text-2xl text-[#7c7c7c] font-slab">
                            Email
                        </h3>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 py-8 bg-white rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="63"
                            height="60"
                            viewBox="0 0 63 60"
                        >
                            <image
                                width="63"
                                height="60"
                                xlinkHref="data:img/png;base64,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"
                            />
                        </svg>
                        <h3 className="text-2xl text-[#7c7c7c] font-slab">
                            Address
                        </h3>
                    </div>
                </section>
            </div>
        </header>
    );
}
