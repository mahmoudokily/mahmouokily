import styles from "./Cv.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMenu,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
function Cv() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Head>
        <title>Mahmoud okily CV</title>
      </Head>
      <div className={styles.cv_body}>
        <div className={styles.cv}>
          <div className={styles.content}>
            <div className={styles.grid_3}>
              <div className={styles.img}>
                <img src="me2.jpg" alt="" />
              </div>
              <div className={styles.title}>
                <div className={styles.name}>Mahmoud Okily</div>
                <div className={styles.job}>Full-stack web Developer</div>
                <div className={styles.job}>Italy, como ,22063</div>
                <div className={styles.job}>tel : 3332432718</div>
              </div>
              <div className={styles.contact}>
                <ul>
                  <li>
                    <a href="http://www.mahmoudokily.me" target="_blank">
                      www.mahmoudokily.me
                    </a>
                  </li>
                  <li>
                    <a href="mailto:okilymahmoud48@gmail.com">
                      {" "}
                      okilymahmoud48@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/"
                      target="_blank"
                    >
                      Mahmoudokily@linkdin
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/heshamalamam73" target="_blank">
                      Mahmoudokily@github
                    </a>
                  </li>
                </ul>
              </div>
              <div className={styles.social}>
                <div className={styles.social_body}>
                  <a
                    href="https://www.instagram.com/midooimam/"
                    target="_blank"
                  >
                    <div>
                      <FaInstagram />
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/mahmoudhassan993/"
                    target="_blank"
                  >
                    <div>
                      <AiFillFacebook />
                    </div>
                  </a>

                  <a href="mailto:okilymahmoud48@gmail.com" target="_blank">
                    <div>
                      <SiGmail />
                    </div>
                  </a>
                  <a href="https://twitter.com/hesham_alamam" target="_blank">
                    <div>
                      <AiFillTwitterSquare />
                    </div>
                  </a>

                  <a href="https://github.com/heshamalamam73" target="_blank">
                    <div>
                      <AiFillGithub />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/"
                    target="_blank"
                  >
                    <div>
                      <AiFillLinkedin />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.gris_2}>
              <div></div>
              <div className={styles.right}>
                <div className={styles.sec_head}>Skills</div>
                <ul className={styles.skill_item}>
                  <li>Back-end: JavaScript, node.js, SQL databases,Mangodb</li>
                  <li>
                    Front-end: JavaScript, TypeScript, React (with Hooks),
                    Redux, next.js
                  </li>
                  <li>
                    DevOps: configured and maintained web servers through AWS
                    CDK, AWS CloudFormation, Ansible, Docker, Chef, SSH.
                    Knowledge of whole AWS stack and experienced in configuring
                    it.
                  </li>
                  <li>
                    Attentive to UI/UX details and high code quality. Fan of
                    unit tests, functional programming, typed interfaces,
                  </li>

                  <li>
                    Used to participate in algorithm programming competitions.
                  </li>
                  <li>Open to evolving in: Java, Python, and many else.</li>
                </ul>
              </div>
            </div>
            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Experiance</div>
              </div>
            </div>
            <ul className={styles.item}>
              <div className={styles.date}> 2017-2021</div>
              <li>
                freelancer
                <ul className={styles.list_child}>
                  <li>
                    Designed dynamic and browser compatible pages using HTML5,
                    CSS3, jQuery, and Javascript.
                  </li>
                  <li>
                    Built single page applications (SPA), responsive web design,
                    UI using HTML5 grid layouts, CSS3 media queries where its an
                    expression and can be used to either true or false.
                  </li>
                  <li>
                    Ensure efficient web development by supporting designers and
                    app developers while resolving website performance issues
                  </li>
                  <li>
                    Designing frontend within object-oriented Javascript
                    frameworks like react.Js and next.Js.
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.item}>
              <div className={styles.date}>2020-present</div>
              <li>
                piattaforme di vendita elettronica
                <ul className={styles.list_child}>
                  <li>
                    Partecipazione alla costruzione del front-end di una delle
                    moderne piattaforme di vendita elettronica using react.js
                  </li>
                </ul>
              </li>
            </ul>
            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Education</div>
              </div>
            </div>
            <ul className={styles.item}>
              <div className={styles.date}>
                <span>
                  Assuit university <br />
                </span>
                2012-2016
              </div>
              <li>faculty of commerce</li>
              <div className={styles.date}>
                <span>
                  self study <br />
                </span>
                2016-2021
              </div>
              <li>online courses </li>
            </ul>
            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Professional summary</div>
              </div>
            </div>
            <ul className={styles.item}>
              <div className={styles.date}></div>
              <ul className={styles.skill_item}>
                <li>
                  solution-driven web developer adept at contributing to highly
                  collaborative work environment,finding solutions and
                  determining customer satisfaction.
                </li>

                <li>
                  proven experience developing consumer-focused websites using
                  HTML ,CSS and JavaScript.
                </li>
                <li>
                  built products for desktop and mobile app users over 4+ years.
                </li>
                <li>
                  meeting highest standards for web design , user experience ,
                  best practices and speed.
                </li>
                <li>
                  designed and developed web applications across multiple APIs ,
                  third-party integrations and databases.
                </li>
              </ul>
              <div className={styles.date}>
                <span>
                  {" "}
                  <br />
                </span>
              </div>
            </ul>

            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Other perks</div>
              </div>
            </div>
            <ul className={styles.item}>
              <div className={styles.date}></div>
              <li>
                In his free time, likes to blog, dance, travel, and play tennis.
              </li>
              <div></div>
              <li>
                Speaks native arabic, fluent English,italian and basic French.
              </li>
            </ul>
            <div className={styles.sign}>
              <div className={styles.sign_text}>
                Autorizzo il trattamento dei miei dati personali ai sensi del
                Dlgs 196 del 30 giugno 2003 e dell’art. 13 GDPR (Regolamento UE
                2016/679) ai fini della ricerca e selezione del personale.
                <div className={styles.firma}>Mahmoud Okily</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cv;
