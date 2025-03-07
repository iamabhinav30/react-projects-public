# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

npm i -D @hookform/devtools
# Form Setup
Set up your project by installing react-hook-form and integrating it into your React application. This is the initial configuration required to start using RHF.

# useForm Hook
The useForm hook is the core of react-hook-form. It initializes the form, manages state, and provides methods (such as register, handleSubmit, and setValue) to handle form operations.

# Managing Form State
RHF manages the state of your form—including values, validation status, and errors—without requiring controlled components, which leads to better performance and less re-rendering.

# Dev Tools Visualization
The DevTool component allows you to visualize the current state of your form, including field values and errors. It is an excellent debugging aid during development.

# Form State Re-renders
React Hook Form optimizes performance by minimizing re-renders. Only the component or field that changes will re-render, thanks to its internal uncontrolled component architecture.

# Form Submission
Form submission is handled via the handleSubmit method. When the form is submitted, RHF validates the data and then passes it to your onSubmit callback.

# Form Validation
RHF supports both built-in and custom validation rules. Validation can be set up during registration of each field using rules like required, pattern, or custom validator functions.

# Display Error Message
Errors are stored in the errors object. You can conditionally render error messages next to form fields based on this object to inform users of validation issues.

# Custom Validation
Beyond built-in validations, you can define custom validation functions. By passing a validate function to the register method, you can implement complex rules specific to your needs.

# Enhancing RHF
Enhancements involve integrating RHF with UI libraries (such as Bootstrap or Material UI) to improve the user experience and tailor form behavior and appearance.

# Default Values
Default values pre-populate form fields. They can be set directly in the useForm hook or loaded asynchronously, which is useful for editing existing data.

# Nested Objects
RHF supports nested data structures. You can register nested fields using dot notation (e.g., social.twitter), making it easy to work with complex form data.

# Array
Manage array fields in your form for inputs like multiple phone numbers or tags. RHF handles these arrays efficiently, allowing you to track each item’s state.

# Dynamic Fields
With the useFieldArray hook, you can add or remove fields dynamically. This is particularly useful for forms where the number of inputs can change based on user actions.

# Numbers and Date Values
RHF can manage different data types, including numbers and dates. Proper registration and conversion ensure that these fields are correctly interpreted and validated.

# Watch Field Values
The watch method allows you to monitor form fields in real time. This is useful for conditional rendering or triggering side effects based on user input.

# Get Field Values
Use the getValues method to retrieve current form values without causing re-renders. This method is ideal for accessing form data programmatically.

# Set Field Values
The setValue method lets you programmatically update form fields. This is useful for scenarios such as dynamically updating a form based on external data or user interactions.

# Touched and Dirty States
RHF tracks whether fields have been touched (focused and then blurred) and if they have been modified (dirty). This information can be used to provide user feedback and control validation messages.

# Disabling Fields
You can disable fields conditionally using React state or by setting the disabled attribute, preventing user interaction when necessary.

# Handle Submission Error
Error handling during form submission involves catching errors (from asynchronous operations or validations) and displaying appropriate feedback to the user.

# Disable Form Submission
To prevent multiple submissions or submissions when the form is invalid, you can disable the submit button based on the form’s state (e.g., using isSubmitting or form validation status).

# Form Submission State
RHF provides properties to track the state of form submission:
isSubmitting: Indicates if the form is currently being submitted.
isSubmitted: Indicates if the form has been submitted at least once.
isSubmitSuccessful: Indicates if the last submission was successful.
submitCount: Tracks how many times the form has been submitted.

# Reset Form
The reset method clears the form values and resets the form state to its default values. This is useful after successful submissions or when a user cancels input.

# Async Validation
Asynchronous validation enables you to perform server-side or delayed validations. This is useful for checking data such as username availability or validating against external APIs before form submission.

# Validation Modes

# Manually Trigger Validation

## Yup Integration
npm i yup @hookform/resolvers

## Zod Integration
npm i zod