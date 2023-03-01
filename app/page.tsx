import GitHubCorner from "@/components/GitHubCorner/GitHubCorner";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { description, title } from "./head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <GitHubCorner />
      <div className={styles.container}>
        <div className={styles.center}>
          <Navbar />
          <section className={styles.home} id="home">
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <h1>{title}</h1>
            <div className={styles.description}>
              <p>{description}</p>
            </div>
            <Link
              href="https://github.com/FrancesCoronel/latina-dev"
              aria-label="Latina Dev"
              target={"_blank"}
              className={styles.contributeLink}
            >
              Contribute
            </Link>
          </section>
          <hr />
          <section className={styles.about} id="#about">
            <div className={styles.logoContainer}>
              <Logo className={styles.logo} />
            </div>
            <h2>About {title}</h2>
            <strong>
              Una comunidad for her, by her, to connect, elevate, and empowHER
            </strong>
            <div className={styles.description}>
              <p>
                Only 15% of engineers are women; 2% are Latina. We want that to
                change! {description}
              </p>
            </div>
            <Link
              href="https://github.com/FrancesCoronel/latina-dev"
              aria-label="Latina Dev"
              target={"_blank"}
              className={styles.contributeLink}
            >
              Join Us
            </Link>
          </section>

          <footer className={styles.footer}>
            <div className={styles.logoContainer}>
              <Logo className={styles.logo} />
            </div>
            <Link
              href="https://github.com/FrancesCoronel/latina-dev"
              aria-label="Latina Dev GitHub"
              target={"_blank"}
            >
              GitHub
            </Link>
            <Link
              href="https://github.com/EllaCodes4"
              aria-label="Latina Dev LinkedIn"
              target={"_blank"}
            >
              LinkedIn
            </Link>
            <Link
              href="https://discord.gg/vxasT67u"
              aria-label="Latina Dev Discord"
              target={"_blank"}
            >
              Discord
            </Link>
          </footer>
        </div>
      </div>
    </main>
  );
}
