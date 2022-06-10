import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ekzki1d', 'template_ugj09oc', form.current, '15zLrW4EVJtlLh3sq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="flex h-screen justify-center items-center" >
            <div class="form-control">
                <form ref={form} onSubmit={sendEmail}>
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group">
                        <span>Name</span>
                        <input name="user_name" type="text" placeholder="name" class="input input-bordered" />
                    </label>
                    <label class="label">
                        <span class="label-text">Your Email</span>
                    </label>
                    <label class="input-group">
                        <span>Email</span>
                        <input name="user_email" type="text" placeholder="info@site.com" class="input input-bordered" />
                    </label>

                    <label class="label">
                        <span class="label-text">Message</span>
                    </label><br></br>
                    <textarea className="message-box" rows="4" cols="50" name="message" /><br></br>
                    <input className="btn" type="submit" value="Send" />
                </form>
            </div>
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" class="input input-bordered" /><br></br>
                <label>Email</label>
                <input type="email" name="user_email" class="input input-bordered" /><br></br>
                <label>Message</label>
                <textarea name="message" /><br></br>
                <input className="btn" type="submit" value="Send" />
            </form> */}

        </div>
    );
};

export default Contact;