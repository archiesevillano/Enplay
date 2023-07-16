import { useContext, useEffect, useState } from 'react';
import InputField from '../components/InputField/InputField';
import { DataProvider } from '../AppData';
import AppButton from '../components/AppButton/AppButton';

const Contact = () => {

    const { serverReq } = useContext(DataProvider);

    // form user inputs
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSendMessage = async () => {
        try {
            const response = await serverReq.post(`/send`, { accessKey: import.meta.env.VITE_ACCESS_KEY, message, email, name });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="contactContainer container-fluid d-flex justify-content-center align-items-center my-5">
            <div className="contactContainer__contact col-xl-5 col-lg-5 col-md-8 col-sm-9 col-10 d-flex flex-column justify-content-center align-items-center">
                <h1 className="contactContainer__contact__heading fw-bold" style={{ fontFamily: "var(--inter)" }}>Contact us</h1>
                <p className='text-center' style={{ fontFamily: "var(--inter)", fontSize: "0.8rem" }}>Please send us your feedback. We will appreciate if you can send us your suggestions for us to improve our service. Thank you for being with us.</p>
                <form className="contactContainer__contact__contactForm d-flex flex-column gap-1 justify-content-center align-items-center mt-3">
                    <InputField inputAction={setName} component="textbox" radius="5px" fontSize="0.9rem" label="Name" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                    <InputField inputAction={setEmail} component="textbox" radius="5px" fontSize="0.9rem" label="Email" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                    <InputField inputAction={setMessage} component="richbox" radius="5px" fontSize="0.9rem" label="Message" width="300px" id="nameField" autoComplete="off" fontFamily={"var(--inter)"} />
                    <AppButton action={handleSendMessage} className={"w-100 mt-1"} text={"Send"} loader={false} />
                </form>
            </div>
        </section>
    );
}

export default Contact;