import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <Head>
        <title>Phenomena</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <main>
        <nav className={`${styles.nav} ${menuActive && styles.navActive}`}>
          {menuActive ? (
            <div className={styles.close} onClick={() => setMenuActive(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </div>
          ) : (
            <div className={styles.burger} onClick={() => setMenuActive(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </div>
          )}
          {menuActive && (
            <div className={styles.menu}>
              <Link
                href="/"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                <Image
                  src="/img/logo-blanco.png"
                  alt="phenomena"
                  className={styles.logo}
                  width={1612}
                  height={213}
                />
              </Link>
              <Link
                href="/music"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                MUSIC MANAGEMENT:
              </Link>
              <Link
                href="/branding"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                RE BRANDING:
              </Link>
              <Link
                href="/asesoria"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                ASESORÍA CREATIVA:
              </Link>
              <Link
                href="/social"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                SOCIAL MEDIA:
              </Link>
              <Link
                href="/stylist"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                STYLIST:
              </Link>
              <Link
                href="/produccion"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                PRODUCCIÓN AUDIOVISUAL:
              </Link>
              <Link
                href="/fotografia"
                className={styles.link}
                onClick={() => setMenuActive(false)}
              >
                FOTOGRAFÍA:
              </Link>
              <div className={styles.contact}>
                <Link
                  href="mailto:info@phenomena.com"
                  className={styles.link}
                  onClick={() => setMenuActive(false)}
                >
                  info@phenomena.com
                </Link>
              </div>
            </div>
          )}
        </nav>
        <div className={styles.homeContent}>
          <section className={styles.pageInfo}>
            <div className="container">
              <h2>MUSIC MANAGEMENT</h2>
              <div className={styles.divider} />
              <div className={styles.text}>
                <p>
                  Servicios de representación artística y relaciones públicas
                  que se enfocan en la exposición y posicionamiento de talento.
                </p>
                <p>
                  Creamos estrategias personalizadas para cada cliente,
                  identificamos oportunidades de negocio y construimos
                  relaciones sólidas con los medios, plataformas y líderes de
                  opinión relevantes en la industria.
                </p>
                <p>
                  &apos;eres libre de hacer lo que quieras nosotros te
                  guiamos... mientras sea cool, or we bullying u.jk0&apos;
                </p>
              </div>
              <h3>Talento:</h3>
              <div className={styles.artists}>
                <div className={styles.artist}>
                  <div
                    className={styles.photo}
                    style={{ backgroundImage: "url(/img/juan-palitos.jpg" }}
                    width={1000}
                    height={500}
                    alt="Juan Palitos"
                  />
                  <h4>Juanpalitoschinos</h4>
                  <div className={styles.bio}>
                    <p>
                      Duo Mexicano conformado por Friné Alejo y Joan Page en
                      2020. Combinan el City-Pop Japonés de los 80s con el
                      sonido del indie latinoamericano. Cuando Friné y JP se
                      conocieron en línea, no imaginaron que estarían
                      componiendo música juntos un año después, y así nació
                      Juanpalitoschinos.
                    </p>
                    <p>
                      Juanpalitoschinos lanzó algunos sencillos:
                      &quot;Bellavista 130&quot;, &quot;Una vez mas&quot;,
                      &quot;Me hago mal&quot; y &quot;Lo Que Tú Me Das&quot; ,
                      un éxito viral que puso a bailar a sus fans en todo el
                      mundo, demostrando la habilidad del dúo para crear
                      melodias pegajosas y memorables.
                    </p>
                  </div>
                </div>
                <div className={styles.artist}>
                  <div
                    className={styles.photo}
                    style={{ backgroundImage: "url(/img/escarlata.jpg" }}
                    width={1000}
                    height={500}
                    alt="Juan Palitos"
                  />
                  <h4>Escarlata</h4>
                  <div className={styles.bio}>
                    <p>
                      Dueto de boleros conformado por Dahiu Rosenblatt y Lulu
                      Mena cantautoras. Escarlata conecta con los recuerdos con
                      melodías y letras cargadas de sentimientos atemporales,
                      actualmente se encuentran en la producción de &apos;Para
                      darte cuenta&apos; su primer álbum del cual se desprenden
                      sencillos como &apos;Qué pecado&apos; , &apos;Tanto
                      Amo&apos; y el dueto &apos;Te tocaba a tí llorar&apos; con
                      el cantante español Alex Ubago.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
