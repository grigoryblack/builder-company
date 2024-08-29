import { useEffect, useRef, useState } from "react";
import Header from "../../components/MainPageComponents/Header/Header.jsx";
import About from "../../components/MainPageComponents/About/About.jsx";
import './index.scss';

const MainPage = () => {
    const sectionRefs = useRef([]);
    const [currentSection, setCurrentSection] = useState(0);

    // Убедитесь, что реф имеет тип (HTMLDivElement | null)[]
    sectionRefs.current = Array(2).fill(null).map((_, i) => sectionRefs.current[i] ?? null);

    const scrollToSection = (index) => {
        if (index >= 0 && index < sectionRefs.current.length) {
            sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(index);
        }
    };

    const handleScroll = (event) => {
        event.preventDefault();
        if (event.deltaY > 0) {
            if (currentSection < sectionRefs.current.length - 1) {
                scrollToSection(currentSection + 1);
            }
        } else {
            if (currentSection > 0) {
                scrollToSection(currentSection - 1);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSection]);

    return (
        <div className="main-page__wrapper">
            <Header ref={(el) => (sectionRefs.current[0] = el)}/>
            <About ref={(el) => (sectionRefs.current[1] = el)}/>
        </div>
    );
};

export default MainPage;
