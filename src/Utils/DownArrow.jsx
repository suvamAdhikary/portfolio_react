
import { IoIosArrowDown } from 'react-icons/io';
import styled from "styled-components";

const Down = styled.h1`

    color: ${(props) => props.theme?.fnt_clr};
    font-size: 60px;

    @media screen and (max-width: 480px){
        display: none;
    }
`;

export default function DownArrow({nextPage}){

    return (<>
        <a href={nextPage} className="down__arrow">
            <Down><IoIosArrowDown /></Down>
        </a>
    </>)
}