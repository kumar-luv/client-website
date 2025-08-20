export const CONTACT_DATA = {
    officeAddress: "123 Tech Street, Digital District, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "info@mldsolutions.com",
    workingHours: "Monday - Friday: 9:00 AM - 6:00 PM",
    socialLinks: {
        facebook: "https://www.facebook.com/mldsolutions",
        linkedin: "https://www.linkedin.com/company/mldsolutions",
        twitter: "https://www.twitter.com/mldsolutions"
    }
};

export const FORM_FIELDS = {
    firstName: {
        name: 'first_name',
        label: 'First Name',
        type: 'text',
        placeholder: 'First Name',
        required: true
    },
    lastName: {
        name: 'last_name',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last Name',
        required: true
    },
    email: {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Email',
        required: true
    },
    phone: {
        name: 'phone_number',
        label: 'Phone',
        type: 'tel',
        placeholder: 'Phone',
        required: true
    },
    message: {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: 'Your message...',
        required: true
    }
};

export const VALIDATION_MESSAGES = {
    required: {
        firstName: 'First name is required',
        lastName: 'Last name is required',
        email: 'Email is required',
        phone: 'Phone is required',
        message: 'Message is required'
    },
    invalidEmail: 'Please enter a valid email address'
};

export const SUCCESS_MESSAGE = "Thank you for your message! We'll get back to you within 24 hours.";
export const SUBMISSION_DELAY = 2000;
export const SUCCESS_DISPLAY_DURATION = 5000;
