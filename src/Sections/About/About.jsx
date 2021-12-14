import styled from "styled-components";
import AboutImg from "../../Assets/Images/about.jpg";
import DownArrow from "../../Utils/DownArrow";


const Wrapper = styled.div`
    /* height: calc(100vh - 60px); */
    height: 100vh !important;
    width: 100vw;
    display: flex;
    align-items: center;

    @media screen and (max-width: 480px){

        flex-direction: column;
        text-align: center;
        margin-top: 50px;
    }

    .about__description {
        font-size: 1.15em;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;

    .img__bg{
        position: absolute;
        top: 50px;
        left: 50px;
        height: 70vh;
        width: 60%;
        background-color: ${(props) => props.theme?.highlighter};
        border-radius: 30px;

        @media screen and (max-width: 480px){

            display: none;
        }
    }

    .about__img{
        width: 60%;
        height: 70vh;
        border-radius: 30px;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 480px){

            height: 30vh;
        }
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }


    @media screen and (max-width: 480px){

        width: 100%;

    }
`;

const Right = styled.div`
    flex: 1;
    position: relative;

    > a{
        position: absolute;
        top: 200%;
        right: 55%;

        >h1{
            width: 30px;
            animation: arrowBlink 2000ms infinite;

            /* @media screen and (max-width: 480px){
                display: none;
            } */
        }

        @keyframes arrowBlink {
            100%{
                opacity: 0;
            }
        }

    }


    @media screen and (max-width: 480px){

        padding: 20px;

    }
`;


export default function About() {


    return(<>

        <Wrapper id="about" >

            <Left>
                <div className="img__bg"></div>
                <div className="about__img">
                    <img src={AboutImg} alt="about" />
                </div>
            </Left>
            <Right>
                <h1>About Me</h1>
                <p className="about__description">From childhood whenever I interacted with computers I used to love it. But somehow I end up pursuing Mechanical Engineering which was never my first choice. In this lockdown, I got the time and opportunity to dive into the tech field and give it a try. As much time I'm spending with it I'm loving it. I want to learn more and more and want to build something which will help people.</p>
                
                <DownArrow nextPage="#project" />
            </Right>

        </Wrapper>

    </>)
}