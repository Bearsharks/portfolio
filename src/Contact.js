import './Contact.scss';
import { useState, useEffect, useRef } from 'react'
import { RECAPTCHA_CLIENT_KEY } from './constants/constants';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const wrapper = useRef('');
    const onSubmit = () => {
        const submitData = (token) => {
            fetch('https://99-interactions-functions.azurewebsites.net/api/send_contact?code=tTrkanYWNrTsl87QAyaNKbHNQw7UTqflaYzvwsi5RJ5JuAfoIarOFg==', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "message": message,
                    "g-recaptcha-response": token
                })
            }).then((res) => {
                setResponse("send message success");
            }).catch((err) => {
                setResponse("send message fail...");
            });
        }
        window.grecaptcha.ready(() => {
            window.grecaptcha.execute(RECAPTCHA_CLIENT_KEY, { action: 'submit' })
                .then(token => {
                    submitData(token);
                });
        });
    };
    useEffect(() => {
        //리캡차가 현재 페이지에서만 보여지도록 함
        const script = document.createElement("style");
        script.innerHTML = `.grecaptcha-badge {visibility : visible;}`;
        wrapper.current.appendChild(script);
    }, []);
    return (
        <div
            className={`wrapper`}
            ref={wrapper}
            onWheel={e => window.onWheelStopPropa(e)}
        >
            <h1 className={`wrapper__header`}>Contact</h1>
            <div className={`message-form`}>
                <label>Name : </label>
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                <label>Email : </label>
                <input type="text" onChange={e => setEmail(e.target.value)} value={email} />
                <label>Message : </label>
                <textarea name="message" cols="40" rows="10" aria-invalid="false" onChange={e => setMessage(e.target.value)} value={message} />
                <br />
                <button onClick={onSubmit}>SUBMIT</button>
            </div>
            <br />
            {response && <label>Output:{response}</label>}
        </div>
    );
}

export default Contact;
