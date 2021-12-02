import styled from "styled-components";
import { FaRegCopyright } from 'react-icons/fa';


const Wrapper = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme?.highlighter};
    color: ${(props) => props.theme?.fnt_clr};
    height: 60px;
    width: 100vw;
    position: absolute;
    bottom: 0px;

    > span{
        background-color: ${(props) => props.theme?.fnt_clr};
        height: 16px;
        width: 2px;
        margin: 5px 10px 4px;
    }
    svg {
        margin: 5px 5px 4px 3px;
    }

`;

export default function Footer() {

    return(
        <Wrapper>
            <p>Created By Suvam Adhikary</p>
            <span></span>
            <p><FaRegCopyright /></p>
            <p>2021</p>
        </Wrapper>
    )
}