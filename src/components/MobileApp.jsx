export default function MobileApp() {
    return (
        <section id="portfolio">
            <main className="flex flex-col md:flex-row gap-6 mx-auto w-full md:w-10/12">
                <div className="w-full md:w-1/3 order-2 md:order-1">
                    <img
                        alt="mobile"
                        src="images/mobile.png"
                        className="mx-auto"
                    />
                </div>
                <div className="px-4 py-8 w-full md:w-2/3 order-1 md:order-2">
                    <h4 className="font-slab font-light text-3xl md:text-4xl text-[#404040] mb-4">
                        Download now
                    </h4>
                    <p className="text-lg text-[#464849] mb-12">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur laoreet semper finibus. Proin cursus porta
                        ipsum, id euismod eros consequat vitae. Donec rutrum
                        risus augue, consequat eleifend ipsum faucibus id.
                    </p>
                    <div className="flex gap-4">
                        <a href="#android">
                            <img alt="android" src="images/android.png" />
                        </a>
                        <a href="#apple">
                            <img alt="android" src="images/apple.png" />
                        </a>
                    </div>
                </div>
            </main>
        </section>
    );
}
