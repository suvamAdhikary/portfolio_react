import styled from "styled-components";

const Wrapper = styled.div`

    .menu{
        width: 300px;
        height: 100vh;
        background-color: ${(props) => props.theme?.bg_clr};
        position: fixed;
        top: 0;
        right: -300px;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 1000ms ease;

        ul{
            margin: 0;
            padding: 0;
            list-style: none;
            font-size: 30px;
            font-weight: 300;
            color: ${(props) => props.theme?.fnt_clr};
            width: 60%;
        }

        li{
            margin-bottom: 25px;
            
            a{
                color: inherit;
                text-decoration: none;
                font-size: inherit;
                /* width: 60%; */
                transition: all 500ms ease;

                &:hover{
                    font-weight: 600;
                }
            }
        }
    }

    .active {
        right: 0;

    }

`;


export default function Menu({menuOpen, setMenuOpen}){

    return (
        <Wrapper>
            <div className={"menu " + (menuOpen && "active")} >
                <ul>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#intro" >Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#about" >About</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#project" >Projects</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#skill" >Skills</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#contact" >Contact</a>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}