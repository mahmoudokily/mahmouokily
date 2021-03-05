import styles from "./Portfolio.module.css";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { AiOutlineFolderView } from "react-icons/ai";
import { motion } from "framer-motion";
import {useEffect} from 'react'
function Portfolio({ isVisible }) {

  return (
    <Layout >
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
              <section className={styles.projects}>
                <div className={styles.project_item}>
                  <div className={styles.grid_2_50}>
                    <div className={styles.projrct_details}>
                      <div className={styles.h1}>YalpCamps</div>
                      <div className={styles.p}>
                        Look for your favorite place to spend short trips
                      </div>
                      <div className={styles.p_bold}>
                        yalpcamp is a web platform that allows to book and sell
                        local tours and tourist attractions all over the world.
                      </div>
                      <ul className={styles.project_desc}>
                        <li>
                          You can search for your favorite place with simple
                          steps and view a lot of its pictures
                        </li>
                        <li>
                          You can see all the places available in a certain area
                          around the world
                        </li>
                        <li>
                          You can add places for sale, determine the
                          geographical location, and add the middle of the mall
                          for easy sale and inspection
                        </li>
                      </ul>
                      <Link href="/portfolio/yalpcamp">
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
                    </div>
                    <Link href="/portfolio/yalpcamp">
                      <div className={styles.project_img}>
                        <div className={styles.img}>
                          <img src="yalpcampd.png" alt="yalpcamp" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.project_item}>
                  <div className={styles.grid_2_50}>
                    <div className={styles.projrct_details}>
                      <div className={styles.h1}>Ilmondo</div>
                      <div className={styles.p}>
                        Learn the statistics of your country
                      </div>
                      <div className={styles.p_bold}>
                        ilmondo is a web platform that allows you to know the
                        statistics of your country and alot of other countries .
                      </div>
                      <ul className={styles.project_desc}>
                        <li>
                          You can search for your country and know the
                          statistics such as population , area , Languages ,
                          Borders
                        </li>
                        <li>
                          All data are automatically renewed according to the
                          latest statistics for countries
                        </li>
                      </ul>
                      <Link href="/portfolio/ilmondo">
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
                    </div>
                    <Link href="/portfolio/ilmondo">
                      <div className={styles.project_img}>
                        <div className={styles.img}>
                          <img src="ilmondod.png" alt="yalpcamp" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.project_item}>
                  <div className={styles.grid_2_50}>
                    <div className={styles.projrct_details}>
                      <div className={styles.h1}>Amazon Clone</div>
                      <div className={styles.alert}>Work is in progress</div>
                      <div className={styles.p}>
                        Online shop for buying and selling
                      </div>
                      <div className={styles.p_bold}>
                        Amazon clone is a web platform Similar to the famous
                        Amazon site, through which you can buy and sell all
                        kinds of products and receive them at your favorite
                        location.
                      </div>
                      <ul className={styles.project_desc}>
                        <li>
                          You can order products online and search for the best
                          prices
                        </li>
                        <li>
                          You can track your order and see a list of all orders
                          that were requested on your profile
                        </li>
                        <li>
                          You can take advantage of many offers and discounts
                          that are updated daily
                        </li>
                      </ul>
                      <Link href="/portfolio/amazon">
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
                    </div>
                    <Link href="/portfolio/amazon">
                      <div className={styles.project_img}>
                        <div className={styles.img}>
                          <img src="amazon1.png" alt="yalpcamp" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.project_item}>
                  <div className={styles.grid_2_50}>
                    <div className={styles.projrct_details}>
                      <div className={styles.h1}>Netflex Clone</div>
                      <div className={styles.alert}>Work is in progress</div>
                      <div className={styles.p}>
                        Guarda ciò che vuoi ovunque. Disdici quando vuoi.
                      </div>
                      <div className={styles.p_bold}>
                        Netflex is a web platform that allows you to show a lot
                        of films from your devices such as mobile phone , pc ,
                        tv online or download them and watch latter
                      </div>
                      <ul className={styles.project_desc}>
                        <li>
                          i just used Nextjs to create this website without any
                          libraries (html, css )
                        </li>
                        {/*<li>*/}
                        {/*    All data are automatically renewed according to the latest statistics*/}
                        {/*    for countries*/}
                        {/*</li>*/}
                      </ul>
                      <Link href="/portfolio/netflex">
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
                          <a href="#">javascript</a>
                        </li>
                      </ul>
                    </div>
                    <Link href="/portfolio/netflex">
                      <div className={styles.project_img}>
                        <div className={styles.img}>
                          <img src="nfd1.png" alt="yalpcamp" />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
}
export default Portfolio;
