import About from "./components/About";
import Blog from "./components/Blog";
import Differnetial from "./components/Differnetial";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileApp from "./components/MobileApp";
import "tw-elements";

export default function App() {
    return (
        <div className="App">
            <Header />
            <main className="container mx-auto px-4 md:px-16">
                <About />
                <Differnetial />
                <Blog />
                <MobileApp />
            </main>
            <Footer />
        </div>
    );
}
