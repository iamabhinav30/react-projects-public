import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

// Global variable to track how many times the component renders
let renderCount = 0;

// Define the shape of the form data
type FormValues = {
  username: string;
  email: string;
  channel: string;
  social:{
    twitter: string,
    facebook: string
  },
  phoneNumbers : string[];
};

export const YoutTubeForm: React.FC = () => {
  // Initialize useForm with the form data type
  const form = useForm<FormValues>({
    defaultValues: {
          username: 'Batman',
          email: '',
          channel: '',
          // social is nested array
          social:{
            twitter:'',
            facebook:''
          },
          phoneNumbers:['','']
        }
    // load save data into react hookform
    // defaultValues: async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //   const data = await response.json();
    //   return {
    //     username: 'Batman',
    //     email: data.email,
    //     channel: ''
    //   }
    // }
  });

  // Destructure form methods and state
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // Function that handles form submission
  const onSubmit = (data: FormValues) => {
    console.log('FormSubmitted', data);
  };

  // Increment the render count (note: React's strict mode may cause double rendering in development)
  renderCount++;

  return (
    <div className="container mt-5">
      {/* Display the render count (divided by 2 if needed for development mode) */}
      <h2>Youtube Form  ({renderCount / 2})</h2>
      {/* Form with Bootstrap styling; noValidate disables native HTML validation */}
      <form
        className="bg-light p-4 rounded shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Username Field */}
        <div className="row mb-3">
          <div className="col-12 mx-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="username"
              // Register the username field with validation rules
              {...register('username', {
                required: {
                  value: true,
                  message: 'Username is required'
                }
              })}
              className="form-control"
            />
          </div>
          {/* Conditionally render an error message if validation fails */}
          {errors.username && <p className="error">{errors.username.message}</p>}
        </div>

        {/* Email Field */}
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>
          <div className="col-12">
            <input
              type="email"
              id="email"
              className="form-control"
              // Register the email field with a regex pattern for validation
              {...register('email', {
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email format'
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return fieldValue !== 'admin@example.com' || "Enter a different Email address"
                  },
                  notBlackListed: (fieldValue) => {
                    return !fieldValue.endsWith('baddomain.com') || "This domain is not supported"
                  }
                }
              })}
            />
          </div>
          {/* Conditionally render an error message if the email does not match the pattern */}
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Channel Field */}
        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="channel" className="form-label">
              Channel
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="channel"
              // Register the channel field with a required validation rule
              {...register('channel', {
                required: {
                  value: true,
                  message: 'Channel is required'
                }
              })}
              className="form-control"
            />
          </div>
          {/* Conditionally render an error message if channel validation fails */}
          {errors.channel && <p className="error">{errors.channel.message}</p>}
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="twitter" className="form-label">
            twitter
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="twitter"
              // Register the channel field with a required validation rule
              {...register('social.twitter', {
                
              })}
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="facebook" className="form-label">
            facebook
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="facebook"
              // Register the channel field with a required validation rule
              {...register('social.facebook')}
              className="form-control"
            />
          </div>
        </div>

        {/* <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="facebook" className="form-label">
            facebook
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              id="facebook"
              // Register the channel field with a required validation rule
              {...register('social.facebook')}
              className="form-control"
            />
          </div>
        </div>  */}
        {/* Submit button styled with Bootstrap */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {/* DevTool for react-hook-form: helps with debugging form state */}
      <DevTool control={control} />
    </div>
  );
};
