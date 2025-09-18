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
    
    // State for leadership team carousel
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const TEAM_PER_PAGE = 3;

    // Navigation functions for team carousel
    const nextTeam = () => {
        setCurrentTeamIndex((prevIndex) => 
            (prevIndex + 1) % Math.ceil(LEADERSHIP_TEAM.length / TEAM_PER_PAGE)
        );
    };

    const prevTeam = () => {
        setCurrentTeamIndex((prevIndex) => 
            prevIndex === 0 
                ? Math.ceil(LEADERSHIP_TEAM.length / TEAM_PER_PAGE) - 1 
                : prevIndex - 1
        );
    };

    // Get current team members for carousel
    const getCurrentTeam = () => {
        const startIndex = currentTeamIndex * TEAM_PER_PAGE;
        return LEADERSHIP_TEAM.slice(startIndex, startIndex + TEAM_PER_PAGE);
    };

    // Open modal with team member details
    const openMemberModal = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    };

    // Close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMember(null);
        // Restore body scroll
        document.body.style.overflow = 'unset';
    };

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <NavBar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">{COMPANY_INFO.name}</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">{COMPANY_INFO.tagline}</p>
                        
                        {/* Company Stats */}
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

                {/* Company Story */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{COMPANY_INFO.description}</p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe in creating technology that not only meets current needs but anticipates future challenges. 
                                Our team combines creativity with technical expertise to deliver solutions that drive real business value.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {CORE_VALUES.map((value, index) => (
                                <div key={index} className="text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Leadership Team - Now as Auto-scrollable Carousel */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Leadership Team</h2>
                        
                        {/* Team Carousel */}
                        <div className="relative">
                            {/* Previous Button */}
                            <button
                                onClick={prevTeam}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0 z-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-400 hover:border-blue-500 group"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Team Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-5xl mx-auto">
                                {getCurrentTeam().map((member, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                                        onClick={() => openMemberModal(member)}
                                    >
                                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <span className="text-3xl text-white font-bold">
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-3 text-lg">{member.position}</p>
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{member.experience}</p>
                                        <p className="text-xs text-gray-500 leading-relaxed">{member.expertise}</p>
                                        
                                        {/* Click indicator */}
                                        <div className="mt-4 text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Click to learn more →
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextTeam}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-0 z-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-400 hover:border-blue-500 group"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Carousel Indicators */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {Array.from({ length: Math.ceil(LEADERSHIP_TEAM.length / TEAM_PER_PAGE) }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTeamIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentTeamIndex 
                                                ? 'bg-blue-600 scale-125' 
                                                : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    />
                                ))}
                            </div>
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
                {isModalOpen && selectedMember && (
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn"
                        onClick={handleBackdropClick}
                    >
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 scrollbar-hide">
                            {/* Modal Header */}
                            <div className="relative p-8 border-b border-gray-200">
                                <button
                                    onClick={closeModal}
                                    className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                
                                {/* Member Avatar and Basic Info */}
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <span className="text-5xl text-white font-bold">
                                            {selectedMember.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedMember.name}</h2>
                                    <p className="text-xl text-blue-600 font-semibold mb-4">{selectedMember.position}</p>
                                    <p className="text-gray-600 text-lg">{selectedMember.experience}</p>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8">
                                {/* Expertise Section */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Areas of Expertise
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">{selectedMember.expertise}</p>
                                </div>

                                {/* Additional Information */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Leadership Style
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedMember.name} brings a collaborative and innovative approach to leadership, 
                                        focusing on team development and strategic growth. With extensive experience in 
                                        {selectedMember.expertise.toLowerCase()}, they drive excellence and foster a culture 
                                        of continuous improvement.
                                    </p>
                                </div>

                                {/* Key Achievements */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Key Achievements
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-3 mt-1">✓</span>
                                            <span className="text-gray-700">Led successful digital transformation initiatives</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-3 mt-1">✓</span>
                                            <span className="text-gray-700">Built and mentored high-performing teams</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-green-500 mr-3 mt-1">✓</span>
                                            <span className="text-gray-700">Delivered innovative solutions for Fortune 500 clients</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact Information */}
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Get in Touch</h3>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1">
                                            Schedule Meeting
                                        </button>
                                        <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex-1">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
};

export default About;