import Link from "next/link";
import styles from "styles/logo.module.css";
export default function Logo({ boxOn = false }) {
  return (
    <Link href="/">
      <span className={boxOn ? styles.box : styles.basic}>CUBE</span>
    </Link>
  );
}
