import { nanoid } from "nanoid";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Wrapper = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 50px;
        font-weight: 600;
    }

    .project__parent{
        width: 100%;
        padding: 50px 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 480px){

        padding: 10px;
    }
`;

const projects = [
    {   
        id: nanoid(4),
        name: "CapdaS",
        summary: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        git: "https://github.com/suvamAdhikary/Capdas-ECommerce.git",
        demo: "jkhjkh",
        blog: "juhoih",
        video: "nhoijhuoi",
        hero: "feefwef"
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone with Backend",
        summary: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "Node", "EJS"],
        git: "https://github.com/suvamAdhikary/MyGlamm-with-Backend.git",
        demo: "jkhjkh",
        blog: "juhoih",
        video: "vdesv",
        videoCvr: "ferfer",
        hero: "feefwef"
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone",
        summary: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
        tech: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/suvamAdhikary/MyGlamm.git",
        demo: "jkhjkh",
        blog: "juhoih",
        video: "svdvdv",
        hero: "feefwef"
    }
]

export default function Project() {

    return (<>
    
        <Wrapper id="project" >

            <h1>My Works</h1>

            <div className="project__parent">
                {projects.map((project) => (
                    <ProjectCard key={project.id} props={project}/>
                ))}
            </div>

        </Wrapper>

    </>)

}