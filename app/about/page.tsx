import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Pencarian Tempat", text: "Sekarang kita sudah mendapat tempat di PT. (sikret) yang berlokasi di Jakarta Pusat." },
  { title: "Kenapa Warna Biru", text: "Biru cerah yang menunjukkan masa depan yang cerah sesuai dengan temanya." },
  { title: "Pembahasan Penting", text: "Ini cuma pembahasan random yang bahkan ga tau buat apa." },
];

export default function AboutPage() {
  return (
    <Container>
      <section className={styles.section}>
        <SectionTitle
          as="h1"
          title="About Us"
          subtitle="Luxion adalah sebuah rancangan Company Visit 2026 yang akan diselanggarakan nanti."
        />
        <div className={styles.grid}>
          {values.map((v) => (
            <article key={v.title} className={styles.card}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
      </section>
    </Container>
  );
}
