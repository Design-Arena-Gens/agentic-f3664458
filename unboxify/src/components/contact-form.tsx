"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";

type FormState = {
  email: string;
  company: string;
  message: string;
  license: "standard" | "extended" | "enterprise";
};

const initialState: FormState = {
  email: "",
  company: "",
  message: "",
  license: "standard",
};

export const ContactForm = () => {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const payload = {
      ...state,
      timestamp: new Date().toISOString(),
    };

    startTransition(async () => {
      try {
        const response = await fetch("/api/support", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        setStatus("success");
        setState(initialState);
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    });
  };

  return (
    <motion.form
      className="contact-form glass-panel"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2>Contact &amp; Licensing Support</h2>
      <p>
        Share your project goals and we&apos;ll assemble the right package — from single artwork
        downloads to fully bespoke installations.
      </p>

      <div className="contact-form__grid">
        <label>
          <span>Email</span>
          <input
            required
            type="email"
            value={state.email}
            onChange={(event) => setState((prev) => ({ ...prev, email: event.target.value }))}
            placeholder="hello@studio.com"
          />
        </label>
        <label>
          <span>Company / Studio</span>
          <input
            type="text"
            value={state.company}
            onChange={(event) => setState((prev) => ({ ...prev, company: event.target.value }))}
            placeholder="Studio or brand name"
          />
        </label>
      </div>

      <label>
        <span>License Type</span>
        <div className="contact-form__radio">
          {(["standard", "extended", "enterprise"] as const).map((license) => (
            <button
              type="button"
              key={license}
              className={state.license === license ? "is-active" : ""}
              onClick={() => setState((prev) => ({ ...prev, license }))}
            >
              {license}
            </button>
          ))}
        </div>
      </label>

      <label>
        <span>Project Brief</span>
        <textarea
          required
          rows={6}
          value={state.message}
          onChange={(event) => setState((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Tell us about the experience you are building, timelines, and desired deliverables."
        />
      </label>

      <button type="submit" className="hero__cta-primary" disabled={isPending}>
        {isPending ? "Sending..." : "Send Request"}
      </button>

      {status === "success" && (
        <span className="contact-form__status contact-form__status--success">
          Thanks! Our team will reply within 24 hours.
        </span>
      )}
      {status === "error" && (
        <span className="contact-form__status contact-form__status--error">
          Something went wrong. Please try again in a moment.
        </span>
      )}
    </motion.form>
  );
};
