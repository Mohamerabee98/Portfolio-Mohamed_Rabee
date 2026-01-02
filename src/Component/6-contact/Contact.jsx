import "./Contact.css";
import { useState, memo } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../../src/animation/done.json";
import EmailAnimation from "../../../src/animation/email.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mnnjzgge");
  const [message, setMessage] = useState("");

  return (
    <section id="Contact" className="contact-us">
      <h1 className="sections-title">
        <span className="icon-mail-envelope-closed"></span> Contact Us
      </h1>

      <p className="sub-title">
        Have a question or just want to say hello? Reach out to me via email and
        I'll get back to you as soon as possible.
      </p>

      <div className="flex contact-flex">
        <form onSubmit={handleSubmit}>
          {[
            { id: "email", label: "Email Address:", type: "email" },
            { id: "message", label: "Your message:", type: "textarea" },
          ].map((field) => (
            <div className="flex" key={field.id}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  required
                  id={field.id}
                  name={field.id}
                  onChange={(e) => setMessage(e.target.value)}
                />
              ) : (
                <input
                  required
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  autoComplete="off"
                  onChange={(e) => setMessage(e.target.value)}
                />
              )}
              <ValidationError
                prefix={field.label}
                field={field.id}
                errors={state.errors}
              />
            </div>
          ))}

          <button type="submit" disabled={state.submitting} className="Submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p className="flex success-message">
              <Lottie
                style={{ height: 37 }}
                animationData={doneAnimation}
                loop={false}
              />
              Your message has been sent successfully
            </p>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="email-animation"
            style={{ width: 400 }}
            animationData={EmailAnimation}
            loop={true}
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
