export const SERVICES_HERO = {
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your digital transformation',
    description: 'We offer a wide range of technology services designed to help businesses innovate, scale, and succeed in the digital world. From custom development to cloud solutions, we have the expertise to bring your vision to life.'
};

export const MAIN_SERVICES = [
    {
        icon: '💻',
        title: 'Custom Web Development',
        description: 'Tailored web applications built with modern technologies and best practices',
        features: [
            'Responsive design for all devices',
            'SEO optimization and performance',
            'Scalable architecture',
            'Security best practices',
            'Ongoing maintenance and support'
        ],
        technologies: ['React', 'Vue.js', 'Node.js', 'Python', 'PHP'],
        pricing: 'Starting from $15,000',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: '📱',
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        features: [
            'Native iOS and Android development',
            'Cross-platform solutions',
            'App store optimization',
            'Push notifications',
            'Offline functionality'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
        pricing: 'Starting from $20,000',
        color: 'from-green-500 to-green-600'
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions',
        features: [
            'AWS and Azure expertise',
            'Auto-scaling infrastructure',
            'Cost optimization',
            'Security and compliance',
            '24/7 monitoring'
        ],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
        pricing: 'Starting from $5,000/month',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: '🔒',
        title: 'Cybersecurity Services',
        description: 'Comprehensive security audits and implementation',
        features: [
            'Penetration testing',
            'Security audits',
            'Compliance consulting',
            'Incident response',
            'Security training'
        ],
        technologies: ['OWASP', 'NIST', 'ISO 27001', 'Penetration Tools', 'SIEM'],
        pricing: 'Starting from $10,000',
        color: 'from-red-500 to-red-600'
    },
    {
        icon: '📊',
        title: 'Data Analytics & BI',
        description: 'Business intelligence and data-driven insights',
        features: [
            'Real-time dashboards',
            'Predictive analytics',
            'Custom reporting',
            'Data visualization',
            'Performance tracking'
        ],
        technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL'],
        pricing: 'Starting from $8,000',
        color: 'from-yellow-500 to-yellow-600'
    },
    {
        icon: '🛠️',
        title: 'DevOps & CI/CD',
        description: 'Streamlined development and deployment processes',
        features: [
            'Automated testing',
            'Continuous deployment',
            'Infrastructure as code',
            'Performance monitoring',
            'Disaster recovery'
        ],
        technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
        pricing: 'Starting from $6,000/month',
        color: 'from-indigo-500 to-indigo-600'
    }
];

export const WORK_PROCESS = [
    {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We start by understanding your business needs, goals, and requirements through detailed discussions and analysis.',
        icon: '🔍'
    },
    {
        step: 2,
        title: 'Design & Architecture',
        description: 'Our team creates detailed designs, user experience flows, and technical architecture for your solution.',
        icon: '✏️'
    },
    {
        step: 3,
        title: 'Development',
        description: 'We build your solution using modern technologies and best practices, with regular updates and feedback.',
        icon: '⚡'
    },
    {
        step: 4,
        title: 'Testing & Quality Assurance',
        description: 'Comprehensive testing ensures your solution is bug-free, secure, and performs optimally.',
        icon: '🧪'
    },
    {
        step: 5,
        title: 'Deployment & Launch',
        description: 'We deploy your solution to production and ensure everything is running smoothly.',
        icon: '🚀'
    },
    {
        step: 6,
        title: 'Support & Maintenance',
        description: 'Ongoing support, updates, and maintenance to keep your solution current and secure.',
        icon: '🛠️'
    }
];

export const TESTIMONIALS = [
    {
        name: 'Jennifer Martinez',
        position: 'CTO, TechCorp Inc.',
        company: 'TechCorp Inc.',
        content: 'MLD Solutions transformed our business with their custom web application. The team was professional, responsive, and delivered exactly what we needed.',
        rating: 5,
        project: 'Custom E-commerce Platform'
    },
    {
        name: 'Robert Chen',
        position: 'Founder, StartupXYZ',
        company: 'StartupXYZ',
        content: 'Working with MLD was a game-changer for our startup. They built our mobile app in record time and helped us scale our user base significantly.',
        rating: 5,
        project: 'Mobile App Development'
    },
    {
        name: 'Amanda Thompson',
        position: 'Operations Director, Global Retail',
        company: 'Global Retail',
        content: 'The cloud migration project was executed flawlessly. MLD\'s expertise in AWS helped us reduce costs by 40% while improving performance.',
        rating: 5,
        project: 'Cloud Migration'
    },
    {
        name: 'David Rodriguez',
        position: 'IT Manager, Healthcare Plus',
        company: 'Healthcare Plus',
        content: 'MLD\'s security audit identified critical vulnerabilities we weren\'t aware of. Their recommendations helped us achieve HIPAA compliance.',
        rating: 5,
        project: 'Security Audit & Compliance'
    }
];

export const TECHNOLOGIES_WE_USE = {
    frontend: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Python', 'Java', 'PHP', '.NET'],
    mobile: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']
};

export const SERVICE_PACKAGES = {
    basic: {
        name: 'Basic Package',
        price: '$5,000 - $15,000',
        features: ['Basic web application', 'Responsive design', 'Basic SEO', '3 months support'],
        suitable: 'Small businesses and startups'
    },
    professional: {
        name: 'Professional Package',
        price: '$15,000 - $50,000',
        features: ['Advanced web application', 'Mobile responsive', 'Advanced SEO', '6 months support', 'Performance optimization'],
        suitable: 'Growing businesses and SMEs'
    },
    enterprise: {
        name: 'Enterprise Package',
        price: '$50,000+',
        features: ['Complex enterprise solution', 'Multi-platform support', 'Advanced analytics', '12 months support', 'Custom integrations', 'Scalability planning'],
        suitable: 'Large enterprises and corporations'
    }
};
