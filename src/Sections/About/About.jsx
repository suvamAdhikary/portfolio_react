import styled from "styled-components";

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
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
        background-color: gray;
        border-radius: 30px;
    }

    .about__img{
        width: 60%;
        height: 70vh;
        border-radius: 30px;
        position: relative;
        overflow: hidden;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const Right = styled.div`
    flex: 1;
`;


export default function About() {


    return(<>

        <Wrapper>

            <Left>
                <div className="img__bg"></div>
                <div className="about__img">
                    <img src="src/Assets/Images/about.jpg" alt="about" />
                </div>
            </Left>
            <Right>
                <h1>About Me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.</p>
            </Right>

        </Wrapper>

    </>)
}