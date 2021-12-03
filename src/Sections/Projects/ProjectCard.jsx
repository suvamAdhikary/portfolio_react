import styled from "styled-components";
import Button from "../../Utils/Button";

const Wrapper = styled.div`

    margin: 20px 10px;
    border: 2px solid ${(props) => props.theme?.highlighter};
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
    width: 80vw;
    min-height: 150px;

    > h2 {
        font-size: 30px;
        font-weight: 500;
    }

    .browser__parent{
        height: 20px;
        background-color: ${(props) => props.theme?.highlighter};
        display: flex;
        align-items: center;
        position: sticky;
        z-index: 2;
    }
    .browser_circle{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${(props) => props.theme?.bg_clr};
        margin: 3px;
    }

    .pcard__main{
        padding: 10px;

        .project__link--parent{
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }

        .summery__tech{
            display: flex;
            flex-direction: column;
            align-items: flex-start !important;
            justify-content: flex-start;
            height: 80%;
            gap: 5px;

            > p{
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                gap: 5px;
            }

            > p > span {
                font-weight: 600;
            }
        }
    }

    @media screen and (max-width: 480px){

        width: 80vw;
        /* height: 25vh; */
    }
`;



export default function ProjectCard({props}){

    const { name, summary, tech, git, demo, blog, video, hero } = props;

    return (<Wrapper>
        <div className="browser__parent">
            <div className="browser_circle"></div>
            <div className="browser_circle"></div>
            <div className="browser_circle"></div>
        </div>
        {/* <img src="#" alt="hero" /> */}
        <h2>{name}</h2>
        <div className="pcard__main">
            <div>
                <div className="summery__tech" >
                    <p>{summary}</p>
                    <p><span>Techstack: </span>{tech.join(" , ")}</p>
                </div>
                {/* <iframe src={video} frameborder="0"><img src="" alt="" /></iframe> */}
            </div>
            <div className="project__link--parent">
                <Button goTo={git} >SOURCE CODE</Button>
                { blog.length ? <Button goTo={blog}>BLOG</Button> : null}
                { demo.length ? <Button goTo={demo}>DEMO</Button> : null}
            </div>
        </div>
    </Wrapper>)

}