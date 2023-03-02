import { motion } from "framer-motion";
import i18next, { t } from "i18next";
import { initReactI18next } from "react-i18next";

import Link from "next/link";
import { resources } from "../common/i18n";
import Layout from "../components/layout/Layout.js";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import i18n from "i18next";
import { useAppContext } from "../common/context";
import axios from "axios";

export default function Home() {
  const { setLang, lang } = useAppContext();
  i18n.use(initReactI18next).init(
    {
      resources,
      lng: lang,
      fallbackLng: "en",
      debug: false,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    (err, t) => {
      if (err) console.error("i18n Error", err);
    }
  );

  const toggleLang = (e) => {
    setLang(e.target.value);
  };

  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);
  return (
    <Layout>
      <div className={styles.absloute}>
        <select onChange={toggleLang} defaultValue={lang}>
          <option value="en">en</option>
          <option value="it">It</option>
        </select>
      </div>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className={styles.name}>
            <span className={styles.htmlAnim}> &lt;h2&gt;</span>
            {t("hello, i'm Okily")}
            <span className={styles.htmlAnim}>&lt;/h2&gt;</span>
          </h2>

          <div className={styles.job_title}>
            {t("a full-stack Javascript web developer")}
          </div>

          <div className={styles.home_btns}>
            <Link href="/portfolio">
              <button> {t("portfolio")} </button>
            </Link>
            <Link href="/myoffer">
              <button> {t("my offers")} </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
