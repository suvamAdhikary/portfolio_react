import styled from "styled-components";
import Menu from "../Menu/Menu";
import Logo from "../../Assets/Images/logo.png";
import Resume from "../../Assets/Docs/resume.pdf";

const Wrapper = styled.div`

    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme?.highlighter};
    color: ${(props) => props.theme?.fnt_clr};
    position: fixed;
    top: 0;
    z-index: 5;
    transition: all 1000ms ease;

    .topbar__main{
        padding: 5px 25px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .active{
        background-color: ${(props) => props.theme?.bg_clr};

        .hamburger{
            span{
                &:first-child{
                    background-color: ${(props) => props.theme?.fnt_clr};
                    transform: rotate(45deg);
                }
                &:nth-child(2){
                    opacity: 0;
                }
                &:last-child{
                    background-color: ${(props) => props.theme?.fnt_clr};
                    transform: rotate(-45deg);
                }
            }
        }
    }
`;

const Left = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;

    a > img {
        width: 100%;
        height: 50px;
    }

    .resume__btn{
        background-color: ${(props) => props.theme?.btn_clr};
        border: none;
        margin-left: 50px;
        color: ${(props) => props.theme?.bg_clr};
        height: 40px;
        border-radius: 10px;
        width: 120px;
        cursor: pointer;
    }
`;

const Right = styled.div`

    .hamburger{
        width: 32px;
        height: 25px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        > span {
            width: 100%;
            height: 3px;
            background-color: ${(props) => props.theme?.bg_clr};
            transform-origin: left;
            transition: all 2000ms ease;
        }
    }
`;

export default function Topbar({menuOpen, setMenuOpen}){

    return (
        <Wrapper>
            <div className={"topbar__main " + (menuOpen && "active")}>
                <Left>
                    <a id="logo" href="#intro">
                        <img src={Logo} alt="logo" />
                    </a> 
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <button className="resume__btn">
                            RESUME
                        </button> 
                    </a>
                </Left>
                <Right>
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </Right>
            </div>
        </Wrapper>
    )
}