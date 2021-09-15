import styles from "./Portfolio.module.css";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { AiOutlineFolderView } from "react-icons/ai";
import { motion } from "framer-motion";

function Portfolio() {
  const projectItemm = function () {
    projects.map(function (project, i) {
      <li>{project.name}</li>;
    });
  };
  return (
    <Layout>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className={styles.right}>
          <div className={styles.scorll}>
            <div className={styles.right_head}>
              <div className={styles.h1}>Portfolio</div>
              <div className={styles.p}>
                See my works below. Unless explicitly stated otherwise, all
                their back-end and front-end parts were completely done by me.
              </div>
              <div className={styles.call_me}>
                Currently open to co-operation on new and existing projects.
                Looking for a CTO, a mentor, or a just full-stack dev willing to
                join your team? Contact me. I will answer you in ~24 hours.
              </div>
              <ul className={styles.projects}>
                {!projects ? (
                  <div className="pre_loader">
                    <img src="../loader.gif" alt="" />
                  </div>
                ) : (
                  projects.map(function (project, i) {
                    return (
                      <li key={i}>
                        <div className={styles.project_item}>
                          <div className={styles.grid_2_50}>
                            <div className={styles.projrct_details}>
                              <div className={styles.h1}>{project.name}</div>
                              <div className={styles.p}>
                                {project.shortDesc}
                              </div>
                              <div className={styles.p_bold}>
                                {project.desc}
                              </div>
                              <ul className={styles.project_desc}>
                                {project.futures.map(function (f, i) {
                                  return <li key={i}>{f}</li>;
                                })}
                              </ul>
                              <Link href={`/portfolio/${project.name}`}>
                                <div className={styles.more}>
                                  <button>
                                    <div className={styles.icon}>
                                      <AiOutlineFolderView />
                                    </div>
                                    More details
                                  </button>
                                </div>
                              </Link>
                              <div className={styles.tecno}>
                                <div className={styles.tecno_head}>
                                  TECHNOLOGIES
                                </div>
                              </div>
                              <ul className={styles.tecno_body}>
                                {project.techno.map(function (t, i) {
                                  return <li key={i}>{t}</li>;
                                })}
                              </ul>
                            </div>
                            <Link href={`/portfolio/${project.name}`}>
                              <div className={styles.project_img}>
                                <div className={styles.img}>
                                  <img src={project.img} alt="yalpcamp" />
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
export default Portfolio;
