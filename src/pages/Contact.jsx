import { useState } from 'react';
import InputField from '../components/InputField/InputField';

const Contact = () => {

    // form user inputs
    const [inputs, setInputs] = useState({
        name: null,
        email: null,
        message: null,
    });

    return (
        <section className="contactContainer container-fluid d-flex justify-content-center align-items-center">
            <div className="contactContainer__contact col-xl-5 col-lg-5 col-md-8 col-sm-9 col-10 d-flex flex-column justify-content-center align-items-center">
                <h1 className="contactContainer__contact__heading">Contact us</h1>
                <form className="contactContainer__contact__contactForm d-flex flex-column gap-1 justify-content-center align-items-center">
                    <InputField component="textbox" radius="5px" fontSize="0.9rem" label="Name" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                    <InputField component="textbox" radius="5px" fontSize="0.9rem" label="Email" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                    <InputField component="richbox" radius="5px" fontSize="0.9rem" label="Message" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                </form>
            </div>
        </section>
    );
}

export default Contact;