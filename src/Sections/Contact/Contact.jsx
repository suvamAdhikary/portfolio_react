import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Footer from "../../Components/Footer";
import { MdEmail, MdCall, MdLocationOn } from 'react-icons/md';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

const Wrapper = styled.div`
    height: calc(100vh - 60px);
    width: 100vw;
    position: relative;
    margin-top: 100px;

    .contact__bg{
        height: calc(100vh - 60px);
        width: 20px;
        background-color: ${(props) => props.theme?.highlighter};
        position: absolute;
    }

    .contact__wrapper{
        padding: 50px;
        display: flex;

        @media screen and (max-width: 480px){

            flex-direction: column;
            padding: 0px 50px;

        }
    }

    @media screen and (max-width: 480px){

        margin-top: -10rem;

    }
`;

const Left = styled.div`
    flex: 1;

    h1 {
        font-size: 60px;
        width: 80%;

        @media screen and (max-width: 480px){

            font-size: 30px;
        }
    }

    .contact__info--item{
        display: flex;
        align-items: center;
        margin: 30px 0px;
        font-weight: 300;
        width: 70%;

        > h2 {
            /* width: 30px;
            height: 30px; */
            font-size: 2.5em;
            margin-right: 20px;
        }

        .social__link{
            font-size: 2.5em;
            margin-right: 20px;
            color: ${(props) => props.theme?.fnt_clr};
        }

        @media screen and (max-width: 480px){

            margin: 20px 0px;
            width: 100%;
        }
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        margin-top: 20px;

        @media screen and (max-width: 480px){

            margin-top: 0px;
            display: flex;
            flex-wrap: wrap;
        }
    }

    input {
        width: 50%;
        height: 50px;
        border: none;
        border-bottom: 1px solid black;
        margin: 10px 0px;
        font-size: 14px;
        padding-left: 10px;
        
        &:first-child, &:nth-child(3) {
            border-radius: 10px 0px 0px 10px;
        }

        &:nth-child(2), &:nth-child(4) {
            border-radius: 0px 10px 10px 0px;
        }

        @media screen and (max-width: 480px){

            width: 46%;
            height: 40px;
            margin: 10px;
            margin-left: 0px;
        }
    }
    textarea {
        width: 100%;
        margin: 10px 0px;
        font-size: 14px;
        padding-left: 10px;
        border-radius: 10px;
    }
    button {
        border: none;
        padding: 15px;
        background-color: ${(props) => props.theme?.btn_clr};
        color: ${(props) => props.theme?.bg_clr};
        font-weight: 500;
        cursor: pointer;
        border-radius: 10px;

        @media screen and (max-width: 480px){

            margin-top: 10px;
        }
    }
`;

export default function Contact(){
    const form = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rraid2l', 'template_n2j15lj', form.current, 'user_EBpSesarMoJ96DDJNi7Wf')
            .then(
                (result) => {
                  console.log(result.text);
                  setDone(true)
                },
                (error) => {
                  console.log(error.text);
                }
              );
    };

    return (<Wrapper id="contact" >
        <div className="contact__bg"></div> 
        <div className="contact__wrapper">
            <Left>
                <h1>Contact</h1>
                <div className="contact__info--item">
                    <h2><MdCall /></h2>
                    <p>+91-8101846457</p>
                </div>
                <div className="contact__info--item">
                    <h2><MdEmail /></h2>
                    <p>adhikary.saheb408@gmail.com</p>
                </div>
                <div className="contact__info--item">
                    <h2><MdLocationOn /></h2>
                    <p>India, West Bengal, North 24 Parganas</p>
                </div>
                <div  className="contact__info--item">
                    <a href="https://www.linkedin.com/in/suvam-adhikary/" target="_blank" rel="noopener noreferrer">
                        <h2 className="social__link"><FaLinkedin /></h2>
                    </a>
                    <a href="https://github.com/suvamAdhikary" target="_blank" rel="noopener noreferrer">
                        <h2 className="social__link"><SiGithub /></h2>
                    </a>
                    <a href="https://twitter.com/suvamAdhikary92" target="_blank" rel="noopener noreferrer">
                        <h2 className="social__link"><FaTwitter /></h2>
                    </a>
                </div>
            </Left>
            <Right>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name" required/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="email" placeholder="Email" name="user_email" required/>
                    <input type="text" placeholder="Mobile" name="user_mobile"/>
                    <textarea rows="5" placeholder="message" name="message" required/>
                    <button >SUBMIT</button>
                    {done && "Thank You..."}
                </form>
            </Right>
        </div>
        <Footer />
    </Wrapper>)
}