import styled from "styled-components";
import Avatar from "../../Assets/Images/me.png";
import Scroll from "../../Assets/Images/scroll.svg";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;

    .main__scroll{
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 20px;
    }

    @media screen and (max-width: 480px){

        flex-direction: column;

    }

`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    .left__wrapper {
        padding: 50px;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media screen and (max-width: 480px){

            padding: 10px;
            height: 100%;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }

    div > h2{
        font-size: 30px;
        font-weight: 300;
    }

    div > h1{
        font-size: 60px;
    }
`;
const Right = styled.div`
    flex: 1;
    position: relative;

    /* .right__wrapper{
        height: 100%;
    } */

    .img__bg{
        clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
        background-color: ${(props) => props.theme?.highlighter};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        position: absolute;
    }
`;
const Titles = styled.div`

    height: 50px;
    overflow: hidden;

    .title__animate {
        width: 90%;
        height: 100%;
        animation: move 10s ease-in-out infinite alternate;

        @keyframes move {
            25%{
                transform: translateY(-50px);
            }
            50%{
                transform: translateY(-100px);
            }
            75%{
                transform: translateY(-150px);
            }
            100%{
                transform: translateY(-200px);
            }
        }

        @media screen and (max-width: 480px){

            width: 100%;
            align-items: center;

        }

        div {

            @media screen and (max-width: 480px){

                align-items: center;

            }
        }
    }

    div > div{
        height: 50px;
        font-size: 30px;
        font-weight: bold;
        display: flex;
        align-items: center;
        /* padding: 0 50px; */
        /* justify-content: center; */


        @media screen and (max-width: 480px){

            align-items: center;

        }
    }

    @media screen and (max-width: 480px){

        margin-top: 20px;
        align-items: center;

    }
`;

const Description = styled.p`
    /* padding: 50px; */

    @media screen and (max-width: 480px){

        display: none;

    }
`;

export default function Intro() {

    return (<>
        <Wrapper>
            <Left>
                <div className="left__wrapper">
                    <h2>Hello, My name is</h2>
                    <h1>Suvam Adhikary</h1>
                    <Titles>
                        <div className="title__animate">
                            <div>Software Developer 🧑‍💻</div>
                            <div>Problem Solver 🤔</div>
                            <div>Traveller 🚶</div>
                            <div>Reader 📖</div>
                            <div>Thinker 🤔💭</div>
                        </div>
                    </Titles>
                    <Description>
                        I am trained full stack developer, specializing in MERN stack, Data Structure, Algorithm. 
                    </Description>
                </div>
            </Left>
            <img src={Scroll} alt="scroll" className="main__scroll"/>
            <Right>
                <div className="img__bg"></div>
                <img src={Avatar} alt="avatar"/>
            </Right>
        </Wrapper>
    </>)
}