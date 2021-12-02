
import { IoIosArrowDown } from 'react-icons/io';
import styled from "styled-components";

const Down = styled.h1`

    color: ${(props) => props.theme?.fnt_clr};
    font-size: 60px;
`;

export default function DownArrow({nextPage}){

    return (<>
        <a href={nextPage}>
            <Down><IoIosArrowDown /></Down>
        </a>
    </>)
}