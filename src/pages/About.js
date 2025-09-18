import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { 
    COMPANY_INFO, 
    CORE_VALUES, 
    LEADERSHIP_TEAM, 
    COMPANY_MILESTONES 
} from '../constants/aboutData';

const About = () => {
    useDocTitle('MLD | Molad e Konsult - About Us');
    

    return (
        <>
            <NavBar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-6">
                        <h1 className="text-5xl font-bold mb-6 text-center">{COMPANY_INFO.name}</h1>
                        <div className="text-xl mb-8 max-w-4xl mx-auto space-y-4">
                            {COMPANY_INFO.tagline.map((paragraph, index) => (
                                <p key={index} className="leading-relaxed text-left">{paragraph}</p>
                            ))}
                        </div>
                        
                        
                        {/* Company Stats */}
                        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">{COMPANY_INFO.founded}</div>
                                <div className="text-blue-200">Founded</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">{COMPANY_INFO.teamSize}</div>
                                <div className="text-blue-200">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">{COMPANY_INFO.projectsCompleted}</div>
                                <div className="text-blue-200">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold mb-2">{COMPANY_INFO.clientsServed}</div>
                                <div className="text-blue-200">Happy Clients</div>
                            </div>
                        </div> */}
                    </div>
                </section>

                {/* Company Story */}
        

                {/* Core Values */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {CORE_VALUES.map((value, index) => (
                                <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full flex flex-col">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                                    <div className="flex-1">
                                        {Array.isArray(value.description) ? (
                                            <ul className="text-gray-600 leading-relaxed text-left space-y-2">
                                                {value.description.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start">
                                                        <span className="text-blue-500 mr-2 mt-1">•</span>
                                                        <span className="text-lg">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Team */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Leadership Team</h2>
                        
                        {/* Team Members List */}
                        <div className="max-w-6xl mx-auto space-y-12">
                            {LEADERSHIP_TEAM.map((member, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {/* Left Side - Photo and Basic Info */}
                                        <div className="w-full md:w-80 flex-shrink-0 text-center md:text-left">
                                            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto md:mx-0 mb-4 flex items-center justify-center">
                                                <span className="text-4xl text-white font-bold">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                                            <p className="text-blue-600 font-semibold text-lg mb-2">{member.position}</p>
                                            <p className="text-gray-600 text-sm">{member.experience}</p>
                                        </div>
                                        
                                        {/* Right Side - Description */}
                                        <div className="flex-1 min-h-0">
                                            {/* <h4 className="text-lg font-semibold text-gray-800 mb-4">Areas of Expertise</h4> */}
                                            {Array.isArray(member.expertise) ? (
                                                <div className="space-y-4">
                                                    {member.expertise.map((paragraph, paragraphIndex) => (
                                                        <p key={paragraphIndex} className="text-gray-600 leading-relaxed text-lg">
                                                            {paragraph}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-gray-600 leading-relaxed text-lg">{member.expertise}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Milestones */}
                {/* <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Journey</h2>
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {COMPANY_MILESTONES.map((milestone, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                                            {milestone.year}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Team Member Modal */}
              
            </main>
            <Footer />
        </>
    );
};

export default About;