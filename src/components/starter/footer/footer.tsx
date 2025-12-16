import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const serverTime = useServerTimeLoader();
 
  return (
    <footer>
      <div class={styles.bande1}>
        <div class="word"></div>
        <div class={styles.bande1_links}>
          <h3>Quick access</h3>
          <ul>
              <li class={styles.bande_link}><Link class={styles.link} href="/">Accueil</Link></li>
              <li class={styles.bande_link}><Link class={styles.link} href="/about">About us</Link></li>
              <li class={styles.bande_link}><Link class={styles.link} href="/contact">Contact</Link></li>
            </ul>
        </div>
        <div class={styles.socials}>
          <h2 class={styles.socials_title}>
              Get in touch
          </h2>
          <p class={styles.socials_p}>Count on me to consistently invest significant effort into my work. I possess a knack for adapting seamlessly, whether it's mastering new technologies or seamlessly integrating into a new team dynamic. </p>
        </div>
      </div>
      <div class="container">
        <a href="#" target="_blank" class={styles.anchor}>
          <span>Made with ♡ Yassine MAKHLOUK</span>
          <span class={styles.spacer}>|</span>
          <span>{serverTime.value.date}</span>
        </a>
      </div>
    </footer>
  );
});
