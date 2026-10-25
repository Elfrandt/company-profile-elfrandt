import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { getMember, team } from "../../../data/team";
import styles from "./member.module.css";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(props: PageProps<"/team/[detail]">): Promise<Metadata> {
  const { detail } = await props.params;
  const member = getMember(detail);
  return { title: member ? member.name : "Team Member" };
}

async function MemberDetail({ params }: { params: Promise<{ detail: string }> }) {
  const { detail } = await params;
  const member = getMember(detail);
  if (!member) notFound();

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>{member.emoji}</div>
      <h1>{member.name}</h1>
      <p className={styles.role}>{member.role}</p>
      <p className={styles.bio}>{member.bio}</p>
      <ul className={styles.tags}>
        {member.favorites.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <Button href="/team">← Back to Team</Button>
    </div>
  );
}

export default function MemberPage(props: PageProps<"/team/[detail]">) {
  return (
    <Container>
      <section className={styles.section}>
        <Suspense fallback={<p className={styles.loading}>Loading...</p>}>
          <MemberDetail params={props.params} />
        </Suspense>
      </section>
    </Container>
  );
}
