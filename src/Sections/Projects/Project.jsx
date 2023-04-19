import { nanoid } from "nanoid";
import styled from "styled-components";
import DownArrow from "../../Utils/DownArrow";
import ProjectCard from "./ProjectCard";


const Wrapper = styled.div`
    /* height: calc(100vh - 60px); */
    width: 100vw;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 420px;
    position: relative;

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

    .down__arrow{

        position: absolute;
        bottom: -480px;
        left: 48vw;

        >h1 {
            animation: arrowBlink 2000ms infinite;
        }

        @keyframes arrowBlink {
            100%{
                opacity: 0;
            }
        }

    }

    @media screen and (max-width: 480px){

        padding: 10px 0px;
        margin-top: 1050px;
    }
`;

const projects = [
        {   
        id: nanoid(4),
        name: "Dineout Clone",
        summary: "It is a collaborative project with the design team, we build the flow from the home page to booking confirmation",
        tech: ["MongoDB", "Express", "React", "Node", "Redux", "Styled Components"],
        git: "https://github.com/suvamAdhikary/dineout_clone.git",
        demo: "https://dineout-clone.vercel.app/",
        blog: "https://medium.com/@arnavi.gode96/dineout-clone-81f57cea770c",
        video: "",
        hero: "https://i.ibb.co/KKJTdhZ/dineout.png"
    },
    {   
        id: nanoid(4),
        name: "CapdaS",
        summary: "It is my first team project with the design team, where we build sustainable clothing e-commerce for the only mobile version. I used the whole MERN stack for the first time in this project.",
        tech: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
        git: "https://github.com/suvamAdhikary/Capdas-ECommerce.git",
        demo: "https://capdas-suvamadhikary.vercel.app/",
        blog: "https://mukhiarambhu.hashnode.dev/developing-capdas-a-sustainabe-e-commerce-store",
        video: "",
        hero: "https://i.ibb.co/wp8kyQR/capDas.png"
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone",
        summary: "It is a team project, where we used local storage for data handling, where we implemented signup, log in with OTP, search function with product name, individual product page, category-wise page, address input, cart, checkout page, etc.",
        tech: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/suvamAdhikary/MyGlamm.git",
        demo: "https://myglamm-clone-jir1r73x1-suvamadhikary.vercel.app/",
        blog: "https://medium.com/@yashgarg1402/859f9f1b03e7",
        video: "",
        hero: "https://i.ibb.co/4JkD4kB/myglamm.png"
    },
    {   
        id: nanoid(4),
        name: "Myglamm Clone with Backend",
        summary: 'It is an extension project of our "myglamm clone". Here we build our backend with MongoDB for this website, and also converted our whole codebase in the MVC model with the help of "EJS".',
        tech: ["CSS", "JavaScript", "MongoDB", "Express", "Node", "EJS"],
        git: "https://github.com/suvamAdhikary/MyGlamm-with-Backend.git",
        demo: "https://myglamclone.onrender.com/",
        blog: "https://medium.com/@yashgarg1402/myglamm-the-all-in-one-beauty-products-website-5b6b82099722",
        video: "",
        videoCvr: "",
        hero: "https://i.ibb.co/MNSJVyv/myGlamm.png"
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
            <DownArrow nextPage="#skill" />
        </Wrapper>

    </>)

}