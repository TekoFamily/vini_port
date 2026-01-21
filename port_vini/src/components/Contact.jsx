import React from 'react';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title">LET'S WORK <br />TOGETHER</h2>
                        <p className="contact-email">hello@viniporthub.com</p>
                        <div className="social-links">
                            <a href="#"><Linkedin size={24} /></a>
                            <a href="#"><Github size={24} /></a>
                            <a href="#"><Instagram size={24} /></a>
                        </div>
                    </div>
                    <form className="contact-form">
                        <div className="form-group">
                            <label>NAME</label>
                            <input type="text" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label>EMAIL</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div className="form-group">
                            <label>MESSAGE</label>
                            <textarea placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="submit" className="submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
