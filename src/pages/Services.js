import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { SERVICES_HERO, SERVICES_DATA } from '../constants/servicesData';
import NestedDropdown from '../components/common/NestedDropdown';

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

                {/* Services Dropdown Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Our Service Offerings</h2>
                        <div className="space-y-6">
                            {SERVICES_DATA.map((service, index) => (
                                <NestedDropdown key={index} service={service} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Services;
