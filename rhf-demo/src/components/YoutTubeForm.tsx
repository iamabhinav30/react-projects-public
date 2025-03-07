import React, { useEffect } from 'react';
import { useForm, useFieldArray, FieldErrors } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

// -----------------------------------------------------------------------
// 1. FORM SETUP & IMPORTS
// -----------------------------------------------------------------------
// We import React and hooks from react-hook-form along with DevTool.
// DevTool helps in visualizing form state for debugging purposes.
  
// Global variable to track how many times the component renders.
// This helps us understand Form State Re-renders.
let renderCount = 0;

// -----------------------------------------------------------------------
// 2. DEFINE FORM DATA STRUCTURE (TYPE)
// -----------------------------------------------------------------------
// This type definition includes simple fields, nested objects, arrays,
// dynamic fields, and fields with specific data types like number and Date.
// - Nested Objects: 'social' contains twitter and facebook.
// - Array: 'phoneNumbers' holds fixed array values.
// - Dynamic Fields: 'phoneNumbersDynamic' managed via useFieldArray.
// - Numbers and Date Values: 'age' and 'dob' respectively.
type FormValues = {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  phoneNumbersDynamic: {
    number: string;
  }[];
  age: number;
  dob: Date;
};

// -----------------------------------------------------------------------
// 3. COMPONENT: YoutTubeForm
// -----------------------------------------------------------------------
// This component demonstrates using react-hook-form with advanced features.
export const YoutTubeForm: React.FC = () => {
  // ---------------------------------------------------------------------
  // useForm Hook & Default Values
  // ---------------------------------------------------------------------
  // useForm initializes the form and manages state (values, errors, touched, dirty, etc.).
  // Default values pre-populate form fields.
  // Mode 'onTouched' triggers validation after the field is touched.
  const form = useForm<FormValues>({
    defaultValues: {
      username: 'Batman', // Default value for username
      email: '',
      channel: '',
      social: {          // Nested object for social media handles
        twitter: '',
        facebook: ''
      },
      phoneNumbers: ['', ''],            // Fixed array fields for phone numbers
      phoneNumbersDynamic: [{ number: '' }], // Dynamic fields for phone numbers managed by useFieldArray
      age: 0,                            // Number field
      dob: new Date()                    // Date field (valueAsDate will convert string to Date)
    },
    mode: 'onTouched' // Validation triggers on field touch. Alternatives: onBlur, onChange, onSubmit, etc.
  });

  // ---------------------------------------------------------------------
  // Destructuring RHF Methods & Form State
  // ---------------------------------------------------------------------
  // - register: Connects input elements to form state.
  // - control: Required for dynamic fields (useFieldArray) and DevTool.
  // - handleSubmit: Wraps form submission to handle validations.
  // - formState: Contains errors, touched, dirty fields, and submission states.
  // - watch: To subscribe to form field changes.
  // - getValues: To retrieve form values without re-rendering.
  // - setValue: To programmatically update field values.
  // - reset: To clear or reset the form.
  // - trigger: To manually trigger validation on fields.
  const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount } = formState;

  // Log submission state info (Form Submission State Tracking)
  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  // ---------------------------------------------------------------------
  // useFieldArray: Managing Dynamic Fields
  // ---------------------------------------------------------------------
  // useFieldArray allows you to add/remove dynamic fields (e.g., multiple phone numbers).
  const { fields, append, remove } = useFieldArray({
    name: 'phoneNumbersDynamic',
    control
  });

  // ---------------------------------------------------------------------
  // Form Submission Handling & Error Handling
  // ---------------------------------------------------------------------
  // onSubmit: Called when the form passes validation.
  // onError: Called if validation fails; useful for debugging submission errors.
  const onSubmit = (data: FormValues) => {
    console.log('FormSubmitted', data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log('Form Errors', errors);
  };

  // ---------------------------------------------------------------------
  // Get Field Values & Set Field Values (Access & Update Form State)
  // ---------------------------------------------------------------------
  // handleGetValues: Demonstrates retrieving current field values using getValues.
  const handleGetValues = () => {
    // Retrieve multiple field values at once
    console.log('GetValues', getValues(['social.twitter', 'username']));
    // Retrieve single field value
    console.log('GetValues', getValues('username'));
  };

  // handleSetValue: Demonstrates how to update a field programmatically.
  // Options allow you to mark the field as dirty, touched, and trigger validation.
  const handleSetValue = () => {
    setValue('username', '', {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true
    });
  };

  // ---------------------------------------------------------------------
  // Watch Field Values (Real-Time Field Change Monitoring)
  // ---------------------------------------------------------------------
  // The watch function subscribes to changes. This can be used for conditional UI rendering.
  useEffect(() => {
    const subscription = watch((value) => {
      // For example, you could trigger side-effects here.
      // console.log(value);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  // ---------------------------------------------------------------------
  // Reset Form on Successful Submission
  // ---------------------------------------------------------------------
  // useEffect monitors isSubmitSuccessful and resets the form when true.
  // Avoid calling reset() inside onSubmit directly.
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(); // Resets form values and state to default values
    }
  }, [isSubmitSuccessful, reset]);

  // ---------------------------------------------------------------------
  // Tracking Form State Re-renders
  // ---------------------------------------------------------------------
  // Render count is incremented to help track how often the component re-renders.
  renderCount++;

  return (
    <div className="container mt-5">
      {/* Display render count (adjusted for potential double renders in development) */}
      <h2>Youtube Form ({renderCount / 2})</h2>
      <form
        className="bg-light p-4 rounded shadow-sm"
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
      >
        {/* -----------------------------------------------------------------
          Username Field
          - useForm Hook: Registering the field with validation (required)
          - Display Error Message if validation fails
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="username"
              {...register('username', { required: { value: true, message: 'Username is required' } })}
              className="form-control"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Email Field
          - Form Validation: Pattern validation and Custom Async Validation
          - Custom Validation: notAdmin, notBlackListed, and emailAvailable
          - Display Error Message on error
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              id="email"
              className="form-control"
              {...register('email', {
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email format'
                },
                validate: {
                  notAdmin: (fieldValue) => fieldValue !== 'admin@example.com' || 'Enter a different Email address',
                  notBlackListed: (fieldValue) => !fieldValue.endsWith('baddomain.com') || 'This domain is not supported',
                  emailAvailable: async (fieldValue) => {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`);
                    const data = await response.json();
                    return data.length === 0 || 'Email already exist';
                  }
                }
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Channel Field
          - Required Field validation
          - Display Error Message if validation fails
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="channel" className="col-sm-3 col-form-label">
            Channel
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="channel"
              {...register('channel', { required: { value: true, message: 'Channel is required' } })}
              className="form-control"
            />
            {errors.channel && <p className="error">{errors.channel.message}</p>}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Date of Birth Field
          - Using valueAsDate to convert input value into a Date object.
          - Required validation for DOB.
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="dob" className="col-sm-3 col-form-label">
            Date Of Birth
          </label>
          <div className="col-sm-9">
            <input
              type="date"
              id="dob"
              {...register('dob', {
                valueAsDate: true,
                required: { value: true, message: 'DOB is required' }
              })}
              className="form-control"
            />
            {errors.dob && <p className="error">{errors.dob?.message}</p>}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Age Field
          - Using valueAsNumber to convert input into a number.
          - Required validation for Age.
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="age" className="col-sm-3 col-form-label">
            Age
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              id="age"
              {...register('age', {
                valueAsNumber: true,
                required: { value: true, message: 'Age is required' }
              })}
              className="form-control"
            />
            {errors.age && <p className="error">{errors.age?.message}</p>}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Nested Fields: Social (Twitter & Facebook)
          - Demonstrates handling of nested objects with dot notation.
          - Conditionally disable Twitter field if Channel is empty.
          - Display error messages for nested fields.
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="twitter" className="col-sm-3 col-form-label">
            Twitter
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="twitter"
              {...register('social.twitter', {
                // Disable Twitter field if channel is empty
                disabled: watch('channel') === '',
                required: { value: true, message: 'Twitter ID is required' }
              })}
              className="form-control"
            />
            {errors.social?.twitter && (
              <p className="error">{errors.social.twitter.message}</p>
            )}
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <label htmlFor="facebook" className="col-sm-3 col-form-label">
            Facebook
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="facebook"
              {...register('social.facebook', {
                required: { value: true, message: 'FB ID is required' }
              })}
              className="form-control"
            />
            {errors.social?.facebook && (
              <p className="error">{errors.social.facebook.message}</p>
            )}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Array Field: Fixed Phone Numbers
          - Demonstrates registering an array field (accessed via index)
          - Display error for the primary phone number field.
        ----------------------------------------------------------------- */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="primary-phone" className="col-sm-3 col-form-label">
            Primary Phone Number
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="primary-phone"
              {...register('phoneNumbers.0', {
                required: { value: true, message: 'Primary Phone number is required' }
              })}
              className="form-control"
            />
            {errors.phoneNumbers?.[0] && (
              <p className="error">{errors.phoneNumbers[0].message}</p>
            )}
          </div>
        </div>

        {/* -----------------------------------------------------------------
          Dynamic Fields: Phone Numbers
          - useFieldArray manages a dynamic list of phone numbers.
          - Each dynamic field is rendered with its own row.
          - A "Remove" button is provided for extra fields (not for the first).
          - An "Add phone number" button allows users to append new fields.
        ----------------------------------------------------------------- */}
        <div className="mb-3">
          <label className="form-label">List of Phone Numbers</label>
          {fields.map((field, index) => (
            <div className="row mb-3 align-items-center" key={field.id}>
              <label htmlFor={`dynamic-phone-${index}`} className="col-sm-3 col-form-label">
                Phone #{index + 1}
              </label>
              <div className="col-sm-9">
                <input
                  type="text"
                  id={`dynamic-phone-${index}`}
                  {...register(`phoneNumbersDynamic.${index}.number` as const)}
                  className="form-control"
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="btn btn-danger mt-1"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ number: '' })}
            className="btn btn-secondary"
          >
            Add phone number
          </button>
        </div>

        {/* -----------------------------------------------------------------
          FORM SUBMISSION BUTTON & DISABLE FORM SUBMISSION
          - The submit button is used to trigger the form submission.
          - It can be disabled based on form state (e.g., not dirty, not valid, or is submitting)
          - Form Submission State properties (isSubmitting, isSubmitted, isSubmitSuccessful, submitCount)
            help track submission progress and outcome.
        ----------------------------------------------------------------- */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        {/* -----------------------------------------------------------------
          Extra Buttons for Testing Form Functions:
          - Get Values: Demonstrates accessing current form values.
          - Set Values: Demonstrates updating a form field programmatically.
          - Reset: Clears the form to its default values.
          - Trigger: Manually validate a specific field.
        ----------------------------------------------------------------- */}
        <button type="button" onClick={handleGetValues}>
          Get Values
        </button>
        <button type="button" onClick={handleSetValue}>
          Set Values
        </button>
        <button type="button" onClick={() => reset()}>
          Reset
        </button>
        <button type="button" onClick={() => trigger('social.facebook')}>
          Validate
        </button>
      </form>
      
      {/* ---------------------------------------------------------------------
        DEV TOOLS VISUALIZATION
        ---------------------------------------------------------------------
        The DevTool component from @hookform/devtools provides a visual interface
        to inspect the current state of the form, including field values, errors,
        touched fields, and more. This is extremely helpful for debugging.
      --------------------------------------------------------------------- */}
      <DevTool control={control} />
    </div>
  );
};
