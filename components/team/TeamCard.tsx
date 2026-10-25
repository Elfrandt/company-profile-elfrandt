import Link from "next/link";
import type { TeamMember } from "../../data/team";
import styles from "./TeamCard.module.css";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <Link href={`/team/${member.slug}`} className={styles.card}>
      <div className={styles.avatar}>{member.emoji}</div>
      <h3>{member.name}</h3>
      <p className={styles.role}>{member.role}</p>
    </Link>
  );
}
