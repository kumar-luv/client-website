import React from 'react';
import { CONTACT_DATA } from '../../constants/contactData';

const ContactInfo = () => {
    const contactItems = [
        {
            icon: (
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            ),
            title: 'Office Address',
            value: CONTACT_DATA.officeAddress
        },
        {
            icon: (
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            ),
            title: 'Call Us',
            value: CONTACT_DATA.phone
        },
        {
            icon: (
                <>
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </>
            ),
            title: 'Email Us',
            value: CONTACT_DATA.email
        },
        {
            icon: (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            ),
            title: 'Working Hours',
            value: CONTACT_DATA.workingHours
        }
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            url: CONTACT_DATA.socialLinks.facebook,
            icon: (
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
            )
        },
        {
            name: 'LinkedIn',
            url: CONTACT_DATA.socialLinks.linkedin,
            icon: (
                <>
                    <circle cx="4.983" cy="5.009" r="2.188" />
                    <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                </>
            )
        },
        {
            name: 'Twitter',
            url: CONTACT_DATA.socialLinks.twitter,
            icon: (
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            )
        }
    ];

    return (
        <div className="bg-blue-900 rounded-2xl p-8 text-white h-fit">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
                {contactItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="bg-blue-800 rounded-full p-3 mr-4 flex-shrink-0">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                {item.icon}
                            </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-blue-200 text-sm break-words">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-800">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-blue-800 hover:bg-blue-700 rounded-full p-3 transition duration-300 hover:scale-110"
                            aria-label={`Visit our ${social.name} page`}
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                {social.icon}
                            </svg>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
