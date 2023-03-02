/** @format */

import styles from "./Cv.module.css";
import * as React from "react";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineMenu,
} from "react-icons/ai";
// import printJS from "print-js";

import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "../../components/layout/Layout";
const Cv = () => {
  const print = () => {
    if (typeof window !== "undefined") {
      const printJS = require("print-js");
      printJS("cv-body", "html", true);
    }
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      id="cv-body"
    >
      <Head children={<title>Mahmoud okily CV</title>} />
      {/* //FIXME add print button func */}
      {/* <div
        style={{
          position: "sticky",
          top: 0,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginBottom: 40,
        }}
      >
        <button style={{ padding: 10, margin: 10 }} onClick={print}>
          Download CV
        </button>
      </div> */}
      <div className={styles.cv_body}>
        <div className={styles.cv}>
          <div className={styles.content}>
            <div className={styles.grid_3}>
              <div className={styles.img}>
                <img src="me2.jpg" alt="mahmoud okily" />
              </div>
              <div className={styles.title}>
                <div className={styles.name}>Mahmoud Okily</div>
                <div className={styles.job}>Full-stack web Developer</div>
                <div className={styles.job}>Italy, Milano ,20155</div>
                <div className={styles.job}>tel : 3332432718</div>
              </div>
              <div className={styles.contact}>
                <ul>
                  {/* <li>
                    <a href="http://www.mahmoudokily.me" target="_blank">
                      www.mahmoudokily.me
                    </a>
                  </li> */}
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
                      https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/heshamalamam73" target="_blank">
                      https://github.com/heshamalamam73
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
                  <li>
                    <span className={styles.exTitle}>
                      Front-end Technologies:
                    </span>
                    HTML, CSS , SASS , JavaScript & JQuery & TypeScript &
                    ReactJS & ReduxJS & NextJS & Material UI & Solidity & Web3js
                    & Ethereum & Storybook & Styled-components & BootStrap &
                    Tailwind CSS
                  </li>
                  <li>
                    <span className={styles.exTitle}>
                      Back-end Technologies:
                    </span>
                    JavaScript & NodeJS & PostgreSQL & TypeORM & MongoDB
                  </li>

                  <li>
                    <span className={styles.exTitle}> DevOps:</span>
                    Aws Services( S3 . Amplify , Lambda , Cognito), Docker,
                    Heroku , Figma , Photoshop , BabelJS, webpack , LernaJS, and
                    other
                  </li>
                  <li>
                    <span className={styles.exTitle}>Programming methods:</span>
                    <ul>
                      <li>
                        Principles and procedures for code quality and
                        testability (clean code, debugging,typed interfaces .)
                      </li>
                      <li>
                        Communication between pieces of software (REST API,
                        JSON,GraphQL.)
                      </li>
                      <li>Version control (git, Github .)</li>
                      <li>
                        Development methodology, management tools (Agile, Scrum,
                        clickUp.Jira)
                      </li>
                      <li>Testing ( Jest, cypress .)</li>
                      <li>
                        Professional knowledge, soft skills ( communication
                        skills, ability to work independently , Attentive to
                        UI/UX details .)
                      </li>
                    </ul>
                  </li>

                  <li className={styles.Warning}>
                    Open to evolving in: Angular, Java, Python, and many else.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Experiance</div>
              </div>
            </div>
            {/* <ul className={styles.item}>
              <div className={styles.date}> 01/2022 - 07/2022</div>
              <li>
                Senior Frontend Web Developer - Reasoned art (reasonedart.com)
                <ul className={styles.list_child}>
                  <li>
                    Reasoned Art is a website for selling encrypted digital
                    graphics(NFT) with the possibility of paying via digital
                    currencies like blockchain , i participate with p.iva as
                    Senior Frontend developer To solve site problems, improve
                    user experience and add more features,improve the quality of
                    the code. And create many reusable components .
                    <span className={styles.red}>Technology used:</span>
                    <span>
                      GraphQL , amplify , AWS S3 , NextJS , Tailwind CSS
                      ,TypeScript
                    </span>
                  </li>
                </ul>
              </li>
            </ul> */}
            <ul className={styles.item}>
              <div className={styles.date}> 2021 - now</div>
              <li>
                Senior fullstack Web Developer - YouniteStars (senso.it)
                <ul className={styles.list_child}>
                  <li>
                    Responsible for maintaining and updating a large internal
                    web platform that is used within all company departments
                    such as customer service and pre- and after-sales services
                    <span className={styles.red}>Technology used:</span>
                    <span>
                      JavaScript,TypeScript , React, Redux , S3 ,Material UI,
                      styled-components , styled-system , lernaJs ,npm packages,
                      redux requests , redux toolkit, git actions, storybook,
                      nodejs , some of aws services , Third-party
                      Libraries,Docker,others
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className={styles.item}>
              <div className={styles.date}> 2017-2020</div>
              <li>
                Fullstack web developer Freelancer
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

            <div className={styles.gris_2}>
              <div></div>
              <div>
                <div className={styles.sec_head}>Education</div>
              </div>
            </div>
            <ul className={styles.item}>
              <div className={styles.date}>
                <span>
                  Egypt <br />
                </span>
                2012-2016
              </div>
              <li>Faculty of Commerce and Business Administration</li>
              <div className={styles.date}>
                <span>
                  Italy
                  <br />
                </span>
                2016-2021
              </div>
              <li>
                {""} Online and offline courses in computer science and
                programming{" "}
              </li>
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
};

export default Cv;
