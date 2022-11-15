export default function Blog() {
    return (
        <section className="flex flex-col md:flex-row gap-8 mb-12 md:mb-24">
            <main className="w-full md:w-2/3 max-h-full relative ">
                <img
                    alt="post"
                    src="images/post1.png"
                    className="w-full h-full object-cover"
                />
                <div className="absolute p-4 top-0 left-10 w-[209px] bg-gradient-to-tr from-[#a0e001] to-[#24a227]">
                    <h3 className="font-bold text-white text-2xl mb-4">
                        Integer porttitor, metus eu auctor consectetur
                    </h3>
                    <h4 className="text-[#083643] underline font-medium">
                        <a href="#post">Read More</a>
                    </h4>
                </div>
            </main>
            <aside className="w-full md:w-1/3 flex flex-col gap-8">
                <div className="h-1/3 flex gap-4">
                    <img src="images/post2.png" alt="post" className="h-full" />
                    <div className="flex flex-col justify-center">
                        <time className="text-[#7f7f7f] text-sm">
                            08/05/2017
                        </time>
                        <h3 className="font-bold text-xl text-[#212121] hover:text-[#24a227]">
                            <a href="#post">
                                Integer porttitor, metus eu auctor consectetur
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="h-1/3 flex gap-4">
                    <img src="images/post3.png" alt="post" className="h-full" />
                    <div className="flex flex-col justify-center">
                        <time className="text-[#7f7f7f] text-sm">
                            08/05/2017
                        </time>
                        <h3 className="font-bold text-xl text-[#212121] hover:text-[#24a227]">
                            <a href="#post">
                                Integer porttitor, metus eu auctor consectetur
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="h-1/3 flex gap-4">
                    <img src="images/post4.png" alt="post" className="h-full" />
                    <div className="flex flex-col justify-center">
                        <time className="text-[#7f7f7f] text-sm">
                            08/05/2017
                        </time>
                        <h3 className="font-bold text-xl text-[#212121] hover:text-[#24a227]">
                            <a href="#post">
                                Integer porttitor, metus eu auctor consectetur
                            </a>
                        </h3>
                    </div>
                </div>
            </aside>
        </section>
    );
}
