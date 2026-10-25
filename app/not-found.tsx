import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

export default function NotFound() {
  return (
    <Container>
      <section
        style={{
          padding: "5rem 0",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <h1 style={{ color: "var(--primary)" }}>404 - Page not found</h1>
        <p style={{ color: "var(--muted)" }}>
          Oops, halaman ini kayaknya ga ada.
        </p>
        <Button href="/">Back Home</Button>
      </section>
    </Container>
  );
}
