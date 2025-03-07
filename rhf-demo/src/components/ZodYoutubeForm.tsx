import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import z from 'yup';

//Need to work on this file

const schema = z.object({
  username: z.string().min(1, { message: 'Username is required' }),
  email: z.string()
    .email({ message: 'Email format is not valid' })
    .min(1, { message: 'Email is required' }),
  channel: z.string().min(1, { message: 'Channel is required' })
})
type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export const ZodYoutubeForm: React.FC = () => {
  // Initialize react-hook-form with default values
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      username: '',
      email: '',
      channel: ''
    },
    // resolver: zodResolver(schema)
  });

  // Handle form submission
  const onSubmit = (data: FormValues) => {
    console.log('FormSubmitted', data);
  };

  return (
    <div className="container mt-5">
      <form
        className="bg-light p-4 rounded shadow-sm"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Username Field */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="username" className="col-sm-3 col-form-label">
            Username
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="form-control"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
        </div>

        {/* Email Field */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="email" className="col-sm-3 col-form-label">
            Email
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Invalid email format'
                }
              })}
              className="form-control"
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>
        </div>

        {/* Channel Field */}
        <div className="row mb-3 align-items-center">
          <label htmlFor="channel" className="col-sm-3 col-form-label">
            Channel
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              id="channel"
              {...register('channel', { required: 'Channel is required' })}
              className="form-control"
            />
            {errors.channel && <p className="error">{errors.channel.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <div className="row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
