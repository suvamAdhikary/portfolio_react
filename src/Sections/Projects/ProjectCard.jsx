import styled from "styled-components";


const Wrapper = styled.div`

    margin: 20px 10px;
    border: 2px solid #f3f2f2;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;

    .browser__parent{
        height: 20px;
        background-color: #f3f2f2;
        display: flex;
        align-items: center;
        position: sticky;
        z-index: 2;
    }
    .browser_circle{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #FFFFFF;
        margin: 3px;
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
        <h1>{name}</h1>
        <div>
            <div>
                <div>
                    <p>{summary}</p>
                    <p>{tech.join(", ")}</p>
                </div>
                {/* <iframe src={video} frameborder="0"><img src="" alt="" /></iframe> */}
            </div>
            {/* <div>
                <a href={git} target="_blank" rel="noopener noreferrer">GIT</a>
                <a href={blog} target="_blank" rel="noopener noreferrer">BLOG</a>
                <a href={demo} target="_blank" rel="noopener noreferrer">DEMO</a>
            </div> */}
        </div>
    </Wrapper>)

}