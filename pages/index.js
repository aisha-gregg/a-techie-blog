import Head from "next/head";
import Link from "next/link";
import styles from "./Home.module.css";
import { Page } from "../components/page/Page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles["nav-wrapper"]}>
        <nav className={styles.nav}>
          <h1 className={styles["blog-title"]}>
            A (somewhat) techie life, a blog by:
          </h1>
        </nav>

        <Page className={styles.main}>
          <section className={styles.introduction}>
            <img
              src="img/techielifephoto.png"
              alt=""
              className={styles.image}
            />
            <div className={styles.info}>
              <header>
                <div className={styles.block}>
                  <span className={styles["title-block"]}></span>
                  <h2 className={styles.firstname}>
                    <span>Aisha K Gregg</span>
                  </h2>

                  <div className={styles["subtitle-block"]}></div>
                  <p className={styles.paragraph}>
                    <em>UI</em>
                    {" / "}
                    <em>FRONTEND</em>
                    {" / "}
                    <em>DESIGN</em>
                  </p>
                </div>
              </header>
              <p className={styles.summary}>
                <strong>Aisha Kamilah Gregg</strong> is a{" "}
                <strong>frontend web developer</strong>, blogger,{" "}
                <strong>UI and visual design lover</strong> and
                <strong> project management graduate </strong>sharing her
                experience of programming through mini blog tutorials.
              </p>
            </div>
          </section>
          <section className={styles["blog-list"]}>
            <h2>Blogs</h2>
            <div className={styles.grid}>
              <Link href="/posts/the-intersection-observer">
                The Intersection Observer
              </Link>
            </div>
          </section>
        </Page>
      </div>
    </>
  );
}
