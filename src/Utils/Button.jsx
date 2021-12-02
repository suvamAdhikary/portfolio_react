import styled from "styled-components";


const A = styled.a`

`;

const Btn = styled.button`

    border: none;
    padding: 15px;
    background-color: ${(props) => props.theme?.btn_clr};
    color: ${(props) => props.theme?.bg_clr};
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
`;

export default function Button({ children, goTo }) {

    return (
        <A href={goTo} target="_blank" rel="noopener noreferrer">
            <Btn>
                {children}
            </Btn>
        </A>
    )
}