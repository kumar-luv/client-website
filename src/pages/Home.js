import React, { useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import backIcon from '../images/back-icon.png';
import nextIcon from '../images/next-icon.png';
import { HERO_SLIDESHOW_DATA, SERVICES_DATA, HERO_SLIDESHOW_INTERVAL, SERVICES_PER_PAGE } from '../constants/homeData';

const Home = () => {
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = HERO_SLIDESHOW_DATA.map((slide) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve();
                    img.onerror = () => resolve();
                    img.src = slide.image;
                });
            });

            Promise.all(imagePromises).then(() => {
                setImagesLoaded(true);
            });
        };

        preloadImages();
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;
        
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % HERO_SLIDESHOW_DATA.length
            );
        }, HERO_SLIDESHOW_INTERVAL);

        return () => clearInterval(interval);
    }, [imagesLoaded]);

    const nextServices = () => {
        setCurrentServiceIndex((prevIndex) => 
            (prevIndex + 1) % Math.ceil(SERVICES_DATA.length / SERVICES_PER_PAGE)
        );
    };

    const prevServices = () => {
        setCurrentServiceIndex((prevIndex) => 
            prevIndex === 0 
                ? Math.ceil(SERVICES_DATA.length / SERVICES_PER_PAGE) - 1 
                : prevIndex - 1
        );
    };

    const goToServices = () => {
        navigate('/services');
    };

    const getCurrentServices = () => {
        const startIndex = currentServiceIndex * SERVICES_PER_PAGE;
        return SERVICES_DATA.slice(startIndex, startIndex + SERVICES_PER_PAGE);
    };

    const stats = [
        { number: "200+", label: "Projects Completed" },
        { number: "150+", label: "Happy Clients" },
        { number: "50+", label: "Team Members" },
        { number: "5+", label: "Years Experience" }
    ];

    return (
        <>
            <NavBar />
            
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {imagesLoaded ? (
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${HERO_SLIDESHOW_DATA[currentImageIndex].image})`,
                            transition: 'background-image 0.5s ease-in-out'
                        }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700">
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    </div>
                )}

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 
                        className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn"
                        style={{ animationDelay: '0.2s' }}
                    >
                        {HERO_SLIDESHOW_DATA[currentImageIndex].title}
                    </h1>
                    
                    <p 
                        className="text-xl md:text-2xl mb-8 animate-fadeIn"
                        style={{ animationDelay: '0.4s' }}
                    >
                        {HERO_SLIDESHOW_DATA[currentImageIndex].subtitle}
                    </p>
                    
                </div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                    {HERO_SLIDESHOW_DATA.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentImageIndex 
                                    ? 'bg-white scale-125' 
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        />
                    ))}
                </div>
            </section>

            {/* <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Our Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
                        </p>
                    </div>

                    <div className="relative">
                        <button
                            onClick={prevServices}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-0 z-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-400 hover:border-blue-500 group"
                        >
                            <img 
                                src={backIcon} 
                                alt="Previous" 
                                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            />
                        </button>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 max-w-5xl mx-auto">
                            {getCurrentServices().map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-100 group max-w-xs mx-auto w-full"
                                >
                                    <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-xl">{service.icon}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-gray-800 mb-2 text-center group-hover:text-blue-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 mb-3 text-center leading-relaxed text-xs">
                                        {service.description}
                                    </p>

                                    <div className="mb-3">
                                        <ul className="space-y-1">
                                            {service.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center text-gray-600 text-xs">
                                                    <span className="text-green-500 mr-2 text-xs">✓</span>
                                                    <span className="truncate">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="text-center">
                                        <button
                                            onClick={goToServices}
                                            className="text-red-500 hover:text-red-700 font-semibold text-sm transition-colors duration-300 hover:underline cursor-pointer"
                                        >
                                            Learn More →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={nextServices}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-0 z-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-blue-400 hover:border-blue-500 group"
                        >
                            <img 
                                src={nextIcon} 
                                alt="Next" 
                                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                            />
                        </button>

                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: Math.ceil(SERVICES_DATA.length / SERVICES_PER_PAGE) }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentServiceIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentServiceIndex 
                                            ? 'bg-blue-600 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;

