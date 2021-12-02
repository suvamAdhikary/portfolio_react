import styled from "styled-components";
import AboutImg from "../../Assets/Images/about.jpg";
import DownArrow from "../DownArrow";


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
        top: 280%;
        right: 55%;

        img{
            width: 30px;
            animation: arrowBlink 2000ms infinite;
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.</p>
                <DownArrow nextPage="#project" />
            </Right>

        </Wrapper>

    </>)
}