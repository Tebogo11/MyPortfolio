import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import "./Contact.css";
import Button from "@material-ui/core/Button";

init("user_QTAt9cnRG9Mg9kYo4Fm20");
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [contactNumber, setContactNumber] = useState("000000");
  const [noError, setNoError] = useState(true);
  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    generateContactNumber();
    sendForm("default_service", "portolio", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        setname("");
        setemail("");
        setmessage("");
        setIsSent(true);
      },
      function (error) {
        console.log("FAILED...", error);
        setNoError(true);
      }
    );
  };

  return (
    <div className="ContactPage ">
      <h1 className="tc">Contact Me</h1>
      {isSent ? (
        <div className="alert alert-success">Your email was successfully,</div>
      ) : noError ? (
        ""
      ) : (
        <div class="alert alert-danger" role="alert">
          There was an error sending your email please check your details and
          try again
        </div>
      )}

      <hr />
      <form
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="form"
      >
        {/* Name  */}

        <input
          className="Input"
          type="text"
          name="user_name"
          placeholder="Name"
          maxLength="30"
          aria-invalid={errors.user_name ? "true" : "false"}
          {...register("user_name", { required: true })}
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {errors.user_name && errors.user_name.type === "required" && (
          <div role="alert">
            Name is required
            <br />
          </div>
        )}
        <br />
        {/* Email  */}

        <input
          className="Input"
          type="email"
          name="user_email"
          placeholder="Email"
          maxLength="30"
          aria-invalid={errors.user_email ? "true" : "false"}
          {...register("user_email", { required: true })}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        {errors.user_email && errors.user_email.type === "required" && (
          <div role="alert">
            Email is required
            <br />
          </div>
        )}
        <br />
        {/* Message  */}

        <textarea
          name="message"
          placeholder="Message"
          aria-invalid={errors.message ? "true" : "false"}
          {...register("message", { required: true })}
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        {errors.message && errors.message.type === "required" && (
          <div role="alert">
            Message is required
            <br />
          </div>
        )}
        <br />
        <input type="hidden" name="contact_number" value={contactNumber} />
        <Button variant="contained" color="primary" type="submit" value="Send">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
