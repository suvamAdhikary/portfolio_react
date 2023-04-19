import styled from "styled-components";
import DownArrow from "../../Utils/DownArrow";


const Wrapper = styled.div`
    /* height: calc(100vh - 60px); */
    margin-top: 8rem;
    height: 80vh !important;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .contribution__images {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    @media screen and (max-width: 480px){

        text-align: center;
        margin-top: 40rem;
        img {
            width: 90vw;
        }
    }
`;


export default function Git() {

    return(<>

        <Wrapper id="git" >
            <div className="git_heading">
                <h1>Github Contribution</h1>
            </div>
            <div className="contribution__images">
                <img src="https://github-readme-streak-stats.herokuapp.com?user=suvamAdhikary&theme=tokyonight&date_format=j%20M%5B%20Y%5D" alt="" />
                <img src="https://github-readme-stats.vercel.app/api?username=suvamAdhikary&show_icons=true&theme=tokyonight" alt="" />
            </div>
        </Wrapper>

    </>)
}