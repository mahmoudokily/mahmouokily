import styles from "./P.module.css";
import { useRouter } from "next/router";
import { FiExternalLink } from "react-icons/fi";
import { AiFillGithub, AiOutlineMobile } from "react-icons/ai";
import Layout from "../../components/layout/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdComputer } from "react-icons/md";
import { useState, useEffect } from "react";

export const projects = [
  {
    name: "Senso",
    shortDesc: "An e-commerce site for selling mobiles ",
    desc: "An e-commerce site for selling mobiles built by Shopify using the languages (html, css, liquid) many features have been added using the JavaScript language",
    dVedio: "../sensod1.png",
    mVedio: "../sensom1.png",
    img: "../sensod1.png",
    futures: [
      "It's my first experience in building a website with Shopify and using liquid, a lot of things have been changed and more features have been added",
    ],
    techno: ["html", "css", "liquid", "javascript"],
    webLink: "https://senso.it//",
    githupLink: null,
  },
  {
    name: "netflex",
    shortDesc: "Guarda ciò che vuoi ovunque. Disdici quando vuoi",
    desc: "Netflex Is A Web Platform That Allows You To Show A Lot Of Films From Your Devices Such As Mobile Phone , Pc , Tv Online Or Download Them And Watch Latter\n",
    dVedio: "../netflex.gif",
    mVedio: "../netmobile.gif",
    img: "../nfd1.png",
    futures: [
      "i just used Nextjs to create this website without any libraries (html, css )",
      "All data are automatically renewed according to the latest statistics for countries",
    ],
    techno: ["nextjs", "html", "css", "javascript"],
    webLink: "https://netflex-nextjs.vercel.app/",
    githupLink: "https://github.com/heshamalamam73/netflex_nextjs/tree/v2",
  },
  {
    name: "yalpcamp",
    shortDesc: "Look for your favorite place to spend short trips",
    desc: " yalpcamp is a web platform that allows to book and sell local tours and tourist attractions all over the world.",
    dVedio: "../yalpcampd.gif",
    mVedio: "../yalpcampm.gif",
    img: "../yalpcampd.png",

    futures: [
      " You can search for your favorite place with simple steps and view a lot of its pictures",
      "You can see all the places available in a certain area around the world",
      "You can add places for sale, determine the geographical location,and add the middle of the mall for easy sale and inspection",
    ],
    techno: ["React", "Redux", "Reactstrap", "Nodejs", "MapBox"],
    webLink: "https://yalpcamps.herokuapp.com/",
    githupLink: "https://github.com/heshamalamam73/yalpcamp/tree/yalpcamps_v3",
  },
  {
    name: "amazon",
    shortDesc: "Online shop for buying and selling",
    desc: " Amazon clone is a web platform Similar to the famous Amazon site,through which you can buy and sell all kinds of products and receive them at your favorite location.",
    dVedio: "../amazond.gif",
    mVedio: "../amazonm.gif",
    img: "../amazon1.png",

    futures: [
      " You can search for your favorite place with simple steps and view a lot of its pictures",
      "You can see all the places available in a certain area around the world",
      "You can add places for sale, determine the geographical location,and add the middle of the mall for easy sale and inspection",
    ],
    techno: ["nextjs", "html", "css", "nodejs", "express", "Javascript"],
    webLink: "https://amazon2021.herokuapp.com/",
    githupLink: "https://github.com/heshamalamam73/amazon_clone",
  },
  {
    name: "ilmondo",
    shortDesc: "Learn the statistics of your country",
    desc: " ilmondo is a web platform that allows you to know the statistics of your country and alot of other countries .",
    dVedio: "../ilmondog.gif",
    mVedio: "../ilmondom.gif",
    img: "ilmondod.png",

    futures: [
      " You can search for your country and know the statistics such as population , area , Languages , Borders",
      " All data are automatically renewed according to the latest statistics for countries",
    ],
    techno: ["nextjs", "html", "css", "api"],
    webLink: "https://ilmondo.herokuapp.com/",
    githupLink: "https://github.com/heshamalamam73/ilmondo",
  },
];

export default function () {
  const router = useRouter();
  const [mob, setMob] = useState(false);
  const [project, setProject] = useState("");

  const cname = router.query.name;

  useEffect(() => {
    const currentProject = projects.find(({ name }) => name === cname);
    setProject(currentProject);
  });

  return (
    <Layout title={`${cname || "Mahmoud okily"}  `}>
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
            </div>
          </div>
        </motion.div>
      )}
    </Layout>
  );
}
