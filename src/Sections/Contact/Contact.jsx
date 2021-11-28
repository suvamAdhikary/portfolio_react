import styled from "styled-components";
import Phone from "../../Assets/Images/phone.png";
import Email from "../../Assets/Images/email.png";
import Address from "../../Assets/Images/address.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Wrapper = styled.div`
    height: 100vh;
    position: relative;

    .contact__bg{
        height: 100vh;
        width: 20px;
        background-color: ${(props) => props.theme?.highlighter};
        position: absolute;
    }

    .contact__wrapper{
        padding: 50px;
        display: flex;

        @media screen and (max-width: 480px){

            flex-direction: column;

        }
    }

    /* @media screen and (max-width: 480px){

        flex-direction: column;

    } */
`;

const Left = styled.div`
    flex: 1;

    h1 {
        font-size: 50px;
        width: 80%;
    }

    img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }
    .contact__info--item{
        display: flex;
        align-items: center;
        margin: 50px 0px;
        font-weight: 300;
        width: 70%;
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
    }

    input {
        width: 50%;
        height: 50px;
        border: none;
        border-bottom: 1px solid black;
        margin: 10px 0px;
        font-size: 14px;
        padding-left: 10px;
    }
    textarea {
        width: 100%;
        margin: 10px 0px;
        font-size: 14px;
        padding-left: 10px;
    }
    button {
        border: none;
        padding: 15px;
        background-color: ${(props) => props.theme?.btn_clr};
        color: ${(props) => props.theme?.bg_clr};
        font-weight: 500;
        cursor: pointer;
    }
`;

export default function Contact(){
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rraid2l', 'template_n2j15lj', formRef.current, 'user_EBpSesarMoJ96DDJNi7Wf')
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

    return (<Wrapper>
        <div className="contact__bg"></div> 
        <div className="contact__wrapper">
            <Left>
                <h1>Contact</h1>
                <div className="contact__info--item">
                    <img src={Phone} alt="phone" />
                    <p>+91-8101846457</p>
                </div>
                <div className="contact__info--item">
                    <img src={Email} alt="email" />
                    <p>adhikary.saheb408@gmail.com</p>
                </div>
                <div className="contact__info--item">
                    <img src={Address} alt="address" />
                    <p>India, West Bengal, North 24 Parganas</p>
                </div>
            </Left>
            <Right>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <input type="text" placeholder="Mobile" name="user_mobile"/>
                    <textarea rows="5" placeholder="message" name="message" />
                    <button >Submit</button>
                    {done && "Thank You..."}
                </form>
            </Right>
        </div>
    </Wrapper>)
}