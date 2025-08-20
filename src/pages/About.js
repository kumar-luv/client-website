import React from 'react';
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
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">{COMPANY_INFO.name}</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">{COMPANY_INFO.tagline}</p>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
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
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{COMPANY_INFO.description}</p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                more info.........???????
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {CORE_VALUES.map((value, index) => (
                                <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                                    {Array.isArray(value.description) ? (
                                        <ul className="text-left list-disc pl-5">
                                            {value.description.map((point, i) => (
                                                <li key={i} className="text-gray-600 leading-relaxed">{point}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Leadership Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {LEADERSHIP_TEAM.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-2xl text-white font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                                    <p className="text-sm text-gray-600 mb-3">{member.experience}</p>
                                    <p className="text-xs text-gray-500">{member.expertise}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20">
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
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;