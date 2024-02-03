import { component$ } from "@builder.io/qwik";
import Image from './logo.png?jsx';
import styles from "./header.module.css";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={styles.wrapper}>
        <div class={styles.logo}>
          <a href="/" title="kakkukammari">
          <Image style={{ width: '150px', height: '150px'}} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="#tietoa"
              target="_blank"
            >
              Tietoa
            </a>
          </li>
          <li>
            <a
              href="#sijainti"
              target="_blank"
            >
              Löydä perille
            </a>
          </li>
          <li>
            <a
              href="#yhteystiedot"
              target="_blank"
            >
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
