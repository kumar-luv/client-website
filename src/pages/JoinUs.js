import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { 
    COMPANY_CULTURE, 
    EMPLOYEE_BENEFITS, 
    OPEN_POSITIONS, 
    APPLICATION_PROCESS, 
    CONTACT_HR 
} from '../constants/joinUsData';

const JoinUs = () => {
    useDocTitle('MLD | Molad e Konsult - Join Us');

    return (
        <>
            <NavBar />
            <main className="pt-20">
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">{COMPANY_CULTURE.title}</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">{COMPANY_CULTURE.subtitle}</p>
                        <p className="text-lg text-blue-200 max-w-4xl mx-auto">{COMPANY_CULTURE.description}</p>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Why Work With Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {COMPANY_CULTURE.highlights.map((highlight, index) => (
                                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-2xl">✨</span>
                                    </div>
                                    <p className="text-gray-700 font-medium">{highlight}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Employee Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {EMPLOYEE_BENEFITS.map((benefit, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Open Positions</h2>
                        <div className="space-y-8 max-w-4xl mx-auto">
                            {OPEN_POSITIONS.map((position, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{position.title}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                                                    {position.department}
                                                </span>
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                                                    {position.type}
                                                </span>
                                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                                                    {position.location}
                                                </span>
                                                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                                                    {position.experience}
                                                </span>
                                            </div>
                                        </div>
                                        <button className="mt-4 lg:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300">
                                            Apply Now
                                        </button>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                                        <ul className="space-y-2">
                                            {position.requirements.map((req, reqIndex) => (
                                                <li key={reqIndex} className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span className="text-gray-600">{req}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-gray-800 mb-3">Responsibilities:</h4>
                                        <ul className="space-y-2">
                                            {position.responsibilities.map((resp, respIndex) => (
                                                <li key={respIndex} className="flex items-start">
                                                    <span className="text-blue-500 mr-2 mt-1">•</span>
                                                    <span className="text-gray-600">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Application Process</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                                {APPLICATION_PROCESS.map((step, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">
                                            {step.step}
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Questions About Our Positions?</h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{CONTACT_HR.message}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href={`mailto:${CONTACT_HR.email}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                            >
                                Email HR Team
                            </a>
                            <a 
                                href={`tel:${CONTACT_HR.phone}`}
                                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
                            >
                                Call HR Team
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default JoinUs;
