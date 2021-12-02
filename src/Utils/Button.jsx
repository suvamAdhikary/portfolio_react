import styled from "styled-components";


const A = styled.a`
    height: 30px;
    width: auto;
`;

const Btn = styled.button`
    height: 30px;
    width: 120px;
    border: none;
    /* padding: 5px; */
    background-color: ${(props) => props.theme?.btn_clr};
    color: ${(props) => props.theme?.bg_clr};
    font-weight: 500;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
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