import styles from "./SectionTitle.module.css";

type Props = { title: string; subtitle?: string; as?: "h1" | "h2" };

export default function SectionTitle({ title, subtitle, as: Tag = "h2" }: Props) {
  return (
    <div className={styles.wrap}>
      <Tag className={styles.title}>{title}</Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
