import ContactForm from '../../Pages/Easy/ContactForm';
import contactFormSource from '../../Pages/Easy/ContactForm.jsx?raw';
import ContactFormTestSource from '../../__tests__/ContactForm.test.jsx?raw';

export const problems = {
  'contact-form': {
    title: 'Contact Form',
    Component: ContactForm,
    testcases: ContactFormTestSource,
    code: contactFormSource,
    description: `* Create a Contact Form Component that allows users to enter their name, email, and a message, and submit the form. Display a confirmation message after a successful submission.
    Requirements
    1. The form must contain three fields: name, email, and message and must have labels "Name :"', "Email:", "Message:".
    2. All fields are required.
    3. The email field must be validated to ensure proper format.
    4. On submission, show a "Thank you, User" message, where User is the entered name.
    5. If you try to submit the form with any of the fields empty, it will prevent submission and show an error message like:
    • "Name is required" for the name field.
    • "Email is required" for the email field.
    • "Message is required" for the message field.
    6. If the email is not in valid format show an error message, "Invalid email format",
    Constraints & Edge Cases
    • Constraint 1: Name, email, and message are mandatory fields.
    • Constraint 2: Email must be in valid format.
    • Edge Case 1: User submits without filling fields - show error.
    • Edge Case 2: User enters invalid email → show specific email error.
    • Edge Case 3: After successful submission, fields should reset.
    */`,
    companies: [
      { name: "Meta" },
      { name: "Amazon" },
      { name: "Google" },
      { name: "Uber" },
    ],
    // testcases: [
    //   '✅ Required field validation',
    //   '✅ Invalid email check',
    //   '✅ Success message on submission',
    // ],
  },
};
