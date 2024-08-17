import Banner from "./components/banner";
import ContactCard from "./components/contact-card";
import Content from "./components/content";
import Footer from "./components/footer";
import Hero from "./components/hero";
import MentorCorousel from "./components/mentor-corousel";
import Navbar from "./components/navbar";
import RegisterFooter from "./components/register-footer";

const App = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <Hero />
            <div>
            <Content />
            <MentorCorousel />
            <Banner />
            <ContactCard />
            <RegisterFooter />
            <Footer />
            </div>
        </div>
    );
};

export default App;
