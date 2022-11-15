export default function About() {
    return (
        <section
            className="flex flex-col md:flex-row justify-between gap-8 mb-20"
            id="about"
        >
            <div className="flex flex-col gap-6 order-2 md:order-1">
                <h2 className="text-[1.7rem] md:text-4xl font-light font-slab text-[#404040]">
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit.
                </h2>
                <p className="text-lg text-[#6a6c6d]">
                    Proin bibendum placerat libero a porttitor. Donec vestibulum
                    at augue venenatis aliquam. Donec dolor elit, lacinia nec
                    purus eget, fringilla fringilla massa. Donec dapibus
                    pulvinar posuere. Maecenas iaculis auctor ligula, at ornare
                    purus lobortis eu.
                </p>
                <p className="text-lg text-[#6a6c6d]">
                    Nullam quis dui ut ante sodales volutpat. Pellentesque
                    pulvinar hendrerit libero, sit amet tristique metus
                    vestibulum sit amet. Sed quam enim, aliquam malesuada
                    eleifend quis, cursus eget ante. In tempor nibh purus, at
                    hendrerit nibh faucibus vel. Sed sollicitudin lacus tellus,
                    a dictum tellus cursus non.
                </p>
                <div className="mt-4 justify-self-end">
                    <button className="uppercase font-medium bg-[#083643] text-white w-full md:w-[147px] h-[42px] rounded-[6px]">
                        see more
                    </button>
                </div>
            </div>
            <img
                alt="about"
                src="/images/about.png"
                className="order-1 md:order-2 h-1/2 md:h-full"
            />
        </section>
    );
}
