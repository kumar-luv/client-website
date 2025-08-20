import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { 
    SERVICES_HERO, 
    MAIN_SERVICES, 
    WORK_PROCESS, 
    TESTIMONIALS, 
    TECHNOLOGIES_WE_USE, 
    SERVICE_PACKAGES 
} from '../constants/servicesData';

const Services = () => {
    useDocTitle('MLD | Molad e Konsult - Our Services');

    return (
        <>
            <NavBar />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-6">{SERVICES_HERO.title}</h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">{SERVICES_HERO.subtitle}</p>
                        <p className="text-lg text-blue-200 max-w-4xl mx-auto">{SERVICES_HERO.description}</p>
                    </div>
                </section>

                {/* Main Services */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What We Offer</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {MAIN_SERVICES.map((service, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                                        <span className="text-2xl">{service.icon}</span>
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                                    
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <span className="text-green-500 mr-2 mt-1">✓</span>
                                                    <span className="text-gray-600 text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {service.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-blue-600 mb-2">{service.pricing}</div>
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
                                            Get Quote
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Work Process */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">How We Work</h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {WORK_PROCESS.map((step, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                                        <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Technologies We Use</h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                                {Object.entries(TECHNOLOGIES_WE_USE).map(([category, technologies]) => (
                                    <div key={category} className="text-center">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4 capitalize">
                                            {category.replace(/([A-Z])/g, ' $1').trim()}
                                        </h3>
                                        <div className="space-y-2">
                                            {technologies.map((tech, index) => (
                                                <div key={index} className="bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-700">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Service Packages</h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {Object.entries(SERVICE_PACKAGES).map(([key, servicePackage]) => (
                                    <div key={key} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{servicePackage.name}</h3>
                                        <div className="text-3xl font-bold text-blue-600 mb-6 text-center">{servicePackage.price}</div>
                                        
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-800 mb-3">Features:</h4>
                                            <ul className="space-y-2">
                                                {servicePackage.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="text-green-500 mr-2 mt-1">✓</span>
                                                        <span className="text-gray-600 text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="text-center">
                                            <p className="text-gray-600 text-sm mb-4">{servicePackage.suitable}</p>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 w-full">
                                                Choose Package
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">What Our Clients Say</h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {TESTIMONIALS.map((testimonial, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                                <p className="text-blue-600 text-sm">{testimonial.position}</p>
                                                <p className="text-gray-500 text-xs">{testimonial.company}</p>
                                            </div>
                                        </div>
                                        
                                        <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.content}"</p>
                                        
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-gray-500">{testimonial.project}</span>
                                            <div className="flex text-yellow-400">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <span key={i}>⭐</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-blue-900 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Let's discuss your project requirements and find the perfect solution for your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                                Get Free Consultation
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition duration-300">
                                View Portfolio
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
