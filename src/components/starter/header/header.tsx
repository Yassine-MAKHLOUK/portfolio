import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";
import { MyLogo } from '../icons/logo';
import { SiDribbble, SiGithub, SiLinkedin } from "@qwikest/icons/simpleicons";

export default component$(() => {
  const isScrolled = useSignal(false);

  // Attach the scroll listener

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50; // Change based on scroll position
    };

    // Add the scroll event listener
    document.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component is removed
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header class={`${styles.header} ${isScrolled.value ? styles.fixed : ''}`}>
      
      <div class={["container", styles.nav_bar, styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="Yassine MAKHLOUK">
            <MyLogo />
          </a>
        </div>
        <nav class={styles.nav}>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">About me</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div class={styles.socials}>
          <a class={styles.social} href="https://github.com/Yassine-MAKHLOUK" title="Github" target="_blank"><SiGithub /></a>
          <a class={styles.social} href="https://www.linkedin.com/in/yassine-makhlouk-javajee-developpeur-/" title="LinkedIn" target="_blank"><SiLinkedin /></a>
          <a class={styles.social} href="http://www.dribbble.com" title="Dribbble" target="_blank"><SiDribbble /></a>
        </div>
      </div>
    </header>
  );
});


