import Link from "next/link";
import styles from "styles/nav.module.css";
export default function Nav() {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span>about</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span>blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
