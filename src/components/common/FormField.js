import React from 'react';

const FormField = ({ 
    field, 
    value, 
    onChange, 
    error, 
    className = '' 
}) => {
    const { name, label, type, placeholder, required } = field;
    
    const handleChange = (e) => {
        onChange(name, e.target.value);
    };

    if (type === 'textarea') {
        return (
            <div className={className}>
                <label className="block text-gray-700 font-medium mb-2">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white resize-none transition-colors duration-200"
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        );
    }

    return (
        <div className={className}>
            <label className="block text-gray-700 font-medium mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-200"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default FormField;
