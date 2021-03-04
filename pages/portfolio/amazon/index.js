import styles from "../P.module.css";
import { AiFillGithub, AiOutlineMobile } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { useState } from "react";
import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdComputer } from "react-icons/md";

function Amazon() {
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
    <Layout>
      <motion.div
        className={styles.details}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.h1}>Amazon</div>
        <div className={styles.alert}>Work is in progress</div>
        <div className={styles.p}>Online shop for buying and selling</div>
        <div className={styles.p_bold}>
          Amazon clone is a web platform Similar to the famous Amazon site,
          through which you can buy and sell all kinds of products and receive
          them at your favorite location.
        </div>
        <ul className={styles.project_desc}>
          <li>You can order products online and search for the best prices</li>
          <li>
            You can track your order and see a list of all orders that were
            requested on your profile
          </li>
          <li>
            You can take advantage of many offers and discounts that are updated
            daily
          </li>
        </ul>

        <div className={styles.more}>
          <Link href="https://amazon2021.herokuapp.com/">
            <a className={styles.a}>
              <div className={styles.icon}>
                <FiExternalLink />
              </div>
              View online
            </a>
          </Link>
          <Link href="https://github.com/heshamalamam73/amazon_clone">
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
            <a href="#">nodejs</a>
          </li>
          <li>
            <a href="#">express</a>
          </li>
          <li>
            <a href="#">Javascript</a>
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
                src={mob ? "../amazonm.gif" : "../amazond.gif"}
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

export default Amazon;
