import styles from "styles/social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Ultra } from "@next/font/google";
export default function Social({ iconSize = "initial" }) {
  return (
    <ul className={styles.list} styles={{ "--icon-size": iconSize }}>
      <li>
        <a href="https:twitter.com"></a>
        <FontAwesomeIcon icon={faTwitter} />
        <span className="sr-only">Twitter</span>
      </li>
      <li>
        <a href="https:twitter.com"></a>
        <FontAwesomeIcon icon={faFacebookF} />
        <span className="sr-only">Facebook</span>
      </li>
      <li>
        <a href="https:twitter.com"></a>
        <FontAwesomeIcon icon={faGithub} />
        <span className="sr-only">Github</span>
      </li>
    </ul>
  );
}
