export default function Footer() {
    return (
        <footer className="bg-[#083643] py-8">
            <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                <section>
                    <p className="text-[#d1d9dc]">
                        70 Bowman St.
                        <br />
                        South Windsor, CT 06074
                    </p>
                </section>
                <section>
                    <img alt="logo" src="images/footer-logo.png" />
                </section>
                <section>
                    <p className="text-[#d1d9dc]">
                        &#169; 2017 Fluidra. All Rights Reserved.
                    </p>
                </section>
            </div>
        </footer>
    );
}
