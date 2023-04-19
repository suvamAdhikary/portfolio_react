import styled from "styled-components";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Intro from "./Intro/Intro";
import Project from "./Projects/Project";
import Skills from "./Skills/Skills";
import Git from "./Git";


const Wrapper = styled.div`

        width: 100%;
        height: calc(100vh - 60px);
        position: relative;
        top: 60px;
        scroll-behavior: smooth !important;
        scroll-snap-type: y mandatory;

        > div{
            width: 100vw;
            height: calc(100vh - 60px);
            
        }

`;

export default function Sections() {

    return (
        <Wrapper>
            <Intro />
            <About />
            <Project />
            <Skills />
            <Git />
            <Contact />
        </Wrapper>
    )
}