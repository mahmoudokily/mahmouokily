import styles from "./P.module.css";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";
import {
  AiFillGithub,
  AiOutlineMobile,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from "react-icons/ai";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdComputer } from "react-icons/md";
import { useState, useEffect } from "react";
import { projects } from "./projects";
import zoom from "./zoom";

export default function () {
  const router = useRouter();
  const [mob, setMob] = useState(false);
  const [project, setProject] = useState("");
  const [zoomIn, setZoomIn] = useState(true);
  const cname = router.query.name;

  useEffect(() => {
    const currentProject = projects.find(({ name }) => name === cname);
    setProject(currentProject);
  });

  //zoom video func
  function zoomMe() {
    const img = document.getElementById("img");
    zoom(zoomIn, setZoomIn, img);
  }
  return (
    <Layout title={cname || "Mahmoud okily"}>
      {!project ? (
        <div className="pre_loader">
          <img src="../loader.gif" alt="" />
        </div>
      ) : (
        <motion.div
          className={styles.details}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.h1}>{project.name}</div>
          <div className={styles.p}>{project.shortDesc}</div>
          <div className={styles.p_bold}>{project.desc}</div>
          <ul className={styles.project_desc}>
            {project.futures.map((f, i) => {
              return <li key={i}>{f}</li>;
            })}
          </ul>
          <div className={styles.more}>
            <Link href={project.webLink}>
              <a className={styles.a}>
                <div className={styles.icon}>
                  <FiExternalLink />
                </div>
                View online
              </a>
            </Link>
            {project.githupLink ? (
              <Link href={project.githupLink}>
                <a className={styles.a}>
                  <div className={styles.icon}>
                    <AiFillGithub />
                  </div>
                  Github repository
                </a>
              </Link>
            ) : null}
          </div>
          <div className={styles.tecno}>
            <div className={styles.tecno_head}>TECHNOLOGIES</div>
          </div>
          <ul className={styles.tecno_body}>
            {project.techno.map((t, i) => {
              return <li key={i}>{t}</li>;
            })}
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
                  src={mob ? project.mVedio : project.dVedio}
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
                {zoomIn ? <AiOutlineZoomIn /> : <AiOutlineZoomOut />}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
}
