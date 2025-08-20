import { useState, useCallback } from 'react';
import { VALIDATION_MESSAGES, SUCCESS_MESSAGE, SUBMISSION_DELAY, SUCCESS_DISPLAY_DURATION } from '../constants/contactData';

export const useContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [errors, setErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const updateField = useCallback((field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear errors when user starts typing
        if (errors.length > 0) {
            setErrors([]);
        }
    }, [errors.length]);

    const validateForm = useCallback(() => {
        const newErrors = [];
        
        // Check required fields
        Object.keys(formData).forEach(field => {
            if (!formData[field].trim()) {
                newErrors.push(VALIDATION_MESSAGES.required[field]);
            }
        });
        
        // Validate email format
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.push(VALIDATION_MESSAGES.invalidEmail);
        }
        
        setErrors(newErrors);
        return newErrors.length === 0;
    }, [formData]);

    const clearForm = useCallback(() => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
        setErrors([]);
    }, []);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, SUBMISSION_DELAY));
            
            clearForm();
            setIsSubmitted(true);
            
            // Auto-hide success message
            setTimeout(() => setIsSubmitted(false), SUCCESS_DISPLAY_DURATION);
            
        } catch (error) {
            console.error('Form submission error:', error);
            setErrors(['Something went wrong. Please try again.']);
        } finally {
            setIsSubmitting(false);
        }
    }, [validateForm, clearForm]);

    return {
        formData,
        errors,
        isSubmitted,
        isSubmitting,
        updateField,
        handleSubmit,
        clearForm
    };
};
