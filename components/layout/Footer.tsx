import Container from "../ui/Container";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.copyright}>
          <p>© 2026 Luxion. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
