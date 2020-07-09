import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    setData(data);
    console.log(data)
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            data-testid="firstname"
            name="firstName"
            id="firstName"
            placeholder="Edd"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            data-testid="lastname"
            name="lastName"
            placeholder="Burke"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input
            data-testid="email"
            id="email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            data-testid="message"
            id="message"
            name="message"
            ref={register({ required: false })}
          />
        </div>
        {data && (
          <pre
            data-testid="newUser"
            style={{ textAlign: "left", color: "white" }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
