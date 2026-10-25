"use client";

import { useState } from "react";
import Button from "../ui/Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" required placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required placeholder="you@email.com" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required placeholder="Tell us something..." />
      </label>
      <Button type="submit" variant="solid">Send Message</Button>
      {sent && <p className={styles.success} role="status">Thank You Yak! Pesanmu Telah Terkirim</p>}
    </form>
  );
}
