import Image from "next/image";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.mascot}>
            <Image
              src="/logo.png"
              alt="Luxion Mascot"
              width={180}
              height={180}
              sizes="(max-width: 520px) 140px, 180px"
              className={styles.mascotImage}
              priority
            />
          </div>
          <h1>Welcome to Luxion</h1>
          <p>
            We are interested in those who are serious about gaining experience and networking with many companies. Feel free to explore our website!
          </p>
          <Button href="/team">Meet Our Team</Button>
        </div>
      </Container>
    </section>
  );
}