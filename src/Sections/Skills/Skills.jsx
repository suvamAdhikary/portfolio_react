import styled from "styled-components";
import { ImHtmlFive } from 'react-icons/im';
import { SiCss3, SiJavascript, SiRedux, SiExpress, SiMongodb, SiNextdotjs, SiVisualstudiocode, SiPostman, SiTypescript } from 'react-icons/si';
import { RiReactjsFill, RiTerminalBoxFill } from 'react-icons/ri';
import { FaSass, FaNodeJs, FaGitAlt, FaNpm, FaChrome } from 'react-icons/fa';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    /* height: calc(100vh - 60px); */
    justify-content: space-around;
    padding: 20px 30px;
    margin-top: 100px;

    .skills__main{
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 25px;
    }


    .skills__sections{
        display: flex;
        width: 90vw;
        justify-content: center;
        align-items: center;
        border: 1px solid ${(props) => props.theme.highlighter};
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
    }


    .skills__spread{
        display: flex;
        flex-direction: row;
        width: 90%;
        justify-content: space-around;
    }

    .skill__card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background-color: ${(props) => props.theme?.highlighter};
        min-height: 100px;
        min-width: 150px;
        border-radius: 10px;
    }
`;


export default function Skills(){

    return(
        <Wrapper id="skill">
            <div className="skills__heading">
                <h1>My Skills</h1>
            </div>
            <div className="skills__main">
                <fieldset className="skills__sections">
                    <legend>Front-end</legend>
                    <div className="skills__spread">
                        <div className="skill__card">
                            <h1><ImHtmlFive /></h1>
                            <p>HTML</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiCss3 /></h1>
                            <p>CSS</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiJavascript /></h1>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill__card">
                            <h1><RiReactjsFill /></h1>
                            <p>React</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiRedux /></h1>
                            <p>Redux</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiTypescript /></h1>
                            <p>Typescript</p>
                        </div>
                        <div className="skill__card">
                            <h1><FaSass /></h1>
                            <p>Sass</p>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="skills__sections">
                    <legend>Back-end</legend>
                    <div className="skills__spread">
                        <div className="skill__card">
                            <h1><FaNodeJs /></h1>
                            <p>Node.js</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiExpress /></h1>
                            <p>Express.js</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiMongodb /></h1>
                            <p>MongoDB</p>
                        </div>
                        <div className="skill__card">
                            <h1><RiReactjsFill /></h1>
                            <p>Mongoose</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiNextdotjs /></h1>
                            <p>Next.js</p>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="skills__sections">
                    <legend>Tools</legend>
                    <div className="skills__spread">
                    <div className="skill__card">
                        <h1><RiTerminalBoxFill /></h1>
                            <p>Terminal</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiVisualstudiocode /></h1>
                            <p>VS Code</p>
                        </div>
                        <div className="skill__card">
                            <h1><FaGitAlt /></h1>
                            <p>Git</p>
                        </div>
                        <div className="skill__card">
                            <h1><FaChrome /></h1>
                            <p>Chrome DevTools</p>
                        </div>
                        <div className="skill__card">
                            <h1><FaNpm /></h1>
                            <p>NPM</p>
                        </div>
                        <div className="skill__card">
                            <h1><SiPostman /></h1>
                            <p>Postman</p>
                        </div>
                    </div>
                </fieldset>
                {/* <div className="skills__sections">

                </div> */}
            </div>
        </Wrapper>
    )
}