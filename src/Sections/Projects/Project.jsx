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
    margin-top: 80px;

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
        summary: "Capdas is our self designed and developed mobile website which provides sustainable clothing store and a platform for national seller and tailors to provide their services online.",
        tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        git: "https://github.com/suvamAdhikary/Capdas-ECommerce.git",
        demo: "https://capdas-suvamadhikary.vercel.app/",
        blog: "https://mukhiarambhu.hashnode.dev/developing-capdas-a-sustainabe-e-commerce-store",
        video: "",
        hero: ""
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone with Backend",
        summary: "It is an international e-commerce store of womens products, where anyone from anywhere can buy beauty products.",
        tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "Node", "EJS"],
        git: "https://github.com/suvamAdhikary/MyGlamm-with-Backend.git",
        demo: "",
        blog: "https://medium.com/@yashgarg1402/myglamm-the-all-in-one-beauty-products-website-5b6b82099722",
        video: "",
        videoCvr: "",
        hero: ""
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone",
        summary: "It is an international e-commerce store of womens products, where anyone from anywhere can buy beauty products.",
        tech: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/suvamAdhikary/MyGlamm.git",
        demo: "",
        blog: "",
        video: "",
        hero: ""
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