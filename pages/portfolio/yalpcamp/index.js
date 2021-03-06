import styles from "../P.module.css";

import { FiExternalLink } from "react-icons/fi";

import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineMobile,AiOutlineZoomIn , AiOutlineZoomOut } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { useState } from "react";
function Yalpcamp() {
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
        <div className={styles.h1}>YalpCamp</div>
        <div className={styles.p}>
          Look for your favorite place to spend short trips
        </div>
        <div className={styles.p_bold}>
          yalpcamp is a web platform that allows to book and sell local tours
          and tourist attractions all over the world.
        </div>
        <ul className={styles.project_desc}>
          <li>
            You can search for your favorite place with simple steps and view a
            lot of its pictures
          </li>
          <li>
            You can see all the places available in a certain area around the
            world
          </li>
          <li>
            You can add places for sale, determine the geographical location,
            and add the middle of the mall for easy sale and inspection
          </li>
        </ul>
        <div className={styles.more}>
          <Link href="https://yalpcamps.herokuapp.com/">
            <a className={styles.a}>
              <div className={styles.icon}>
                <FiExternalLink />
              </div>
              View online
            </a>
          </Link>

          <Link href="https://github.com/heshamalamam73/yalpcamp/tree/yalpcamps_v3">
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
            <a href="#">React</a>
          </li>
          <li>
            <a href="#">Redux</a>
          </li>
          <li>
            <a href="#">Reactstrap</a>
          </li>
          <li>
            <a href="#">Nodejs</a>
          </li>
          <li>
            <a href="#">MapBox</a>
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
                src={mob ? "../yalpcampm.gif" : "../yalpcampd.gif"}
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
              {zoomIn ? <AiOutlineZoomIn /> : <AiOutlineZoomOut/>}
            </button>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}

export default Yalpcamp;
