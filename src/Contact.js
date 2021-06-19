import './Contact.scss';
import { useState, useEffect } from 'react'
import { RECAPTCHA_CLIENT_KEY } from './constants/constants';

function Contact() {
    const [name, setName] = useState('');
    const [response, setResponse] = useState('');
    const onSubmit = () => {
        const submitData = (token) => {
            // call a backend API to verify reCAPTCHA response
            fetch('https://99-interactions-functions.azurewebsites.net/api/testtest?code=/UtFACM1csahFMaVcV2lkP7a4aMMIG78BH8OqsfuRjFJldyigtooOQ==', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": name,
                    "g-recaptcha-response": token
                })
            }).then(res => res.json()).then(res => {
                setResponse(res.score);
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
        if (document.getElementsByClassName('grecaptcha-badge')[0]) document.getElementsByClassName('grecaptcha-badge')[0].style.visibility = "visible";
        return () => {
            if (document.getElementsByClassName('grecaptcha-badge')[0]) document.getElementsByClassName('grecaptcha-badge')[0].style.visibility = "hidden";
        }
    }, []);
    return (
        <div>
            Contact<br />
            <label>Name: </label>
            <input type="text" onChange={e => setName(e.target.value)} value={name} />
            <button onClick={onSubmit}>제출</button>
            <br />
            {response && <label>Output:{response}</label>}
        </div>
    );
}

export default Contact;
