import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { useDocTitle } from '../components/CustomHook';

const Contact = () => {
    useDocTitle('MLD | Molad e Konsult - Contact Us');

    return (
        <>
            <NavBar />
            <main className="pt-20">
                <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
                    <header className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Get in touch with us. We'd love to hear from you and answer any questions you might have.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        <div className="lg:col-span-2">
                            <ContactForm />
                        </div>

                        <div className="lg:col-span-1">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Contact;