import { metadata } from "app/layout";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

import ButtonLink from "@/components/ButtonLink/ButtonLink";

import Logo from "../../Logo/Logo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <h1>{metadata.title.default}</h1>
      <div className={styles.description}>
        <p>{metadata.description}</p>
      </div>
      <ButtonLink
        text="Contribute on GitHub"
        url="https://github.com/Latina-Dev/latina-dev"
        external={true}
        icon={faGithub}
      />
    </section>
  );
}
