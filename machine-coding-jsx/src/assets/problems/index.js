import ContactForm from './ContactForm';
import contactFormSource from '!!raw-loader!./ContactForm';

export const problems = {
  'contact-form': {
    title: 'Contact Form',
    Component: ContactForm,
    code: contactFormSource,
    description: `Create a simple contact form using React with name, email, and message fields. Validate all fields and show a success message on submit.`,
    testcases: [
      '✅ Submitting empty form shows required errors',
      '✅ Submitting invalid email shows format error',
      '✅ Valid input shows thank-you message',
    ]
  },
  // Add more problems dynamically here
};
