import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";
import { SiDribbble, SiGithub, SiLinkedin } from "@qwikest/icons/simpleicons";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            LOGO
          </a>
        </div>
        <nav class={styles.nav}>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div class={styles.socials}>
          <a href="http://www.github.com" title="Github" target="_blank"><SiGithub /></a>
          <a href="http://www.linkedin.com" title="LinkedIn" target="_blank"><SiLinkedin /></a>
          <a href="http://www.dribbble.com" title="Dribbble" target="_blank"><SiDribbble /></a>
        </div>
      </div>
    </header>
  );
});
