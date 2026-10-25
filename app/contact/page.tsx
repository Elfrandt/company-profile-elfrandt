import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import ContactForm from "../../components/contact/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Container>
      <section className={styles.section}>
        <SectionTitle as="h1" title="Contact Us" subtitle="Ada pertanyaan yang ingin disampaikan? kirim form!" />
        <div className={styles.grid}>
          <ContactForm />
          <aside className={styles.info}>
            <h3>Get in touch</h3>
            <p>📍 East Bekasi, West Java, Indonesia</p>
            <p>✉️ elfrandtgold29@gmai.com</p>
            <p>🕘 Mon - Fri, 07.30 - 17.00</p>
          </aside>
        </div>
      </section>
    </Container>
  );
}
