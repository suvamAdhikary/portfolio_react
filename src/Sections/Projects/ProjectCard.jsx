import styled from "styled-components";


const Wrapper = styled.div`

    padding: 10px;
    margin: 20px 10px;
    border: 2px solid #f3f2f2;
    border-radius: 10px 10px 0px 0px;
    overflow: hidden;
`;



export default function ProjectCard({props}){

    const { name, summary, tech, git, demo, blog, video, hero } = props;

    return (<Wrapper>
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
                <a href={git}>GIT</a>
                <a href={blog}>BLOG</a>
                <a href={demo}>DEMO</a>
            </div> */}
        </div>
    </Wrapper>)

}