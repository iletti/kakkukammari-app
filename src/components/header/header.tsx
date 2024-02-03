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
            >
              Tietoa
            </a>
          </li>
          <li>
            <a
              href="#sijainti"
            >
              Löydä perille
            </a>
          </li>
          <li>
            <a
              href="#yhteystiedot"
            >
              Yhteystiedot
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
