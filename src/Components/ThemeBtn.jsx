import styled from "styled-components"
import Sun from "../Assets/Images/sun.png";
import Moon from "../Assets/Images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Wrapper = styled.div`
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 1px solid ${(props) => props.theme?.brdr_clr};
    background-color: ${(props) => props.theme?.tgl_clr};
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .theme__ican{
        width: 15px;
        height: 15px;
    }
    .theme__btn{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: ${(props) => props.theme?.btn_clr};
        position: absolute;
        cursor: pointer;
        left: ${(props) => props.theme?.left};
    }
`;

export default function ThemeBtn(){

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(<Wrapper>
        <img src={Sun} alt="sun" className="theme__ican" />
        <img src={Moon} alt="moon" className="theme__ican" />
        <div
            className="theme__btn"
            onClick={() => {toggleTheme(theme)}}
            ></div>
    </Wrapper>)
}