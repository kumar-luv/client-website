import React from 'react';
import { FORM_FIELDS, SUCCESS_MESSAGE } from '../../constants/contactData';
import FormField from '../common/FormField';
import { useContactForm } from '../../hooks/useContactForm';

const ContactForm = () => {
    const {
        formData,
        errors,
        isSubmitted,
        isSubmitting,
        updateField,
        handleSubmit
    } = useContactForm();

    const getFieldError = (fieldName) => {
        return errors.find(error => 
            error.includes(FORM_FIELDS[fieldName].label.toLowerCase())
        );
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Send us a message</h2>
            
            {/* Success Message */}
            {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    {SUCCESS_MESSAGE}
                </div>
            )}

            {/* Error Messages */}
            {errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <ul className="list-disc list-inside">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        field={FORM_FIELDS.firstName}
                        value={formData.firstName}
                        onChange={updateField}
                        error={getFieldError('firstName')}
                    />
                    
                    <FormField
                        field={FORM_FIELDS.lastName}
                        value={formData.lastName}
                        onChange={updateField}
                        error={getFieldError('lastName')}
                    />

                    <FormField
                        field={FORM_FIELDS.email}
                        value={formData.email}
                        onChange={updateField}
                        error={getFieldError('email')}
                    />

                    <FormField
                        field={FORM_FIELDS.phone}
                        value={formData.phone}
                        onChange={updateField}
                        error={getFieldError('phone')}
                    />
                </div>
                
                <FormField
                    field={FORM_FIELDS.message}
                    value={formData.message}
                    onChange={updateField}
                    error={getFieldError('message')}
                />
                
                <div className="text-center">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`
                            bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 
                            text-white font-semibold py-3 px-8 rounded-lg 
                            transition duration-300 transform hover:scale-105 
                            disabled:transform-none disabled:cursor-not-allowed
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        `}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
