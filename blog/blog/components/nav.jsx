import Link from "next/link";
export default function Nav() {
  return (
    <nav>
      <ul>
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
