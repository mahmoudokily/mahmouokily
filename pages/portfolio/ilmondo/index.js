import styles from "../P.module.css";

import { FiExternalLink } from "react-icons/fi";

import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineMobile } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { useState } from "react";
function Ilmondo() {
  const [mob, setMob] = useState(false);
  const [zoomIn, setZoomIn] = useState(true);
  function zoomMe() {
    const img = document.getElementById("img");
    if (zoomIn) {
      img.style.height = "700px";
      setZoomIn(!zoomIn);
    } else {
      img.style.height = "450px";
      setZoomIn(!zoomIn);
    }
  }

  return (
    <Layout title="home">
      <motion.div
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.h1}>Ilmondo</div>
        <div className={styles.p}>Learn the statistics of your country</div>
        <div className={styles.p_bold}>
          ilmondo is a web platform that allows you to know the statistics of
          your country and alot of other countries .
        </div>
        <ul className={styles.project_desc}>
          <li>
            You can search for your country and know the statistics such as
            population , area , Languages , Borders
          </li>
          <li>
            All data are automatically renewed according to the latest
            statistics for countries
          </li>
        </ul>
        <div className={styles.more}>
          <Link href="https://ilmondo.herokuapp.com/">
            <a className={styles.a}>
              <div className={styles.icon}>
                <FiExternalLink />
              </div>
              View online
            </a>
          </Link>
          <Link href="https://github.com/heshamalamam73/ilmondo">
            <a className={styles.a}>
              <div className={styles.icon}>
                <AiFillGithub />
              </div>
              Github repository
            </a>
          </Link>
        </div>
        <div className={styles.tecno}>
          <div className={styles.tecno_head}>TECHNOLOGIES</div>
        </div>
        <ul className={styles.tecno_body}>
          <li>
            <a href="#">nextjs</a>
          </li>
          <li>
            <a href="#">html</a>
          </li>
          <li>
            <a href="#">css</a>
          </li>
          <li>
            <a href="#">api</a>
          </li>
        </ul>
        <div className={styles.images}>
          <div className={styles.full_img}>
            <motion.div
              className={styles.details}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <img
                src={mob ? "../ilmondom.gif" : "../ilmondog.gif"}
                alt=""
                className={styles.imgg}
                id="img"
              />
            </motion.div>
          </div>
          <div className={styles.control}>
            <button onClick={() => setMob(true)}>
              <AiOutlineMobile />
            </button>
            <button onClick={() => setMob(false)}>
              <MdComputer />
            </button>
            <button className={styles.zoom} onClick={zoomMe}>
              {" "}
              {zoomIn ? "zoom in" : "zoom out"}
            </button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Ilmondo;
