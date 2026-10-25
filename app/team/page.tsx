import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import TeamCard from "../../components/team/TeamCard";
import { team } from "../../data/team";
import styles from "./team.module.css";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <Container>
      <section className={styles.section}>
        <SectionTitle as="h1" title="Meet Our Team" subtitle="Mastermind kita" />
        <div className={styles.grid}>
          {team.map((m) => (
            <TeamCard key={m.slug} member={m} />
          ))}
        </div>
      </section>
    </Container>
  );
}
