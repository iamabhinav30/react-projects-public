import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type TContactFormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [user, setUser] = useState<string>("");

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<TContactFormData>({ defaultValues });

  const onSubmitForm: SubmitHandler<TContactFormData> = (data) => {
    console.log("form submitted", data);
    setUser(data.name);
    reset();
  };
  return (
    <>
      {isSubmitSuccessful ? <h1>Thank you {user}</h1>
      : <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          {...register("message", {
            required: "Message is required",
          })}
        />
        {errors.message && (
          <p style={{ color: "red" }}>{errors.message.message}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>}
      
    </>
  );
};
export default ContactForm;
