import styles from './Cv.module.css'
import Link from 'next/link'
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare, AiOutlineMenu} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {motion} from "framer-motion";
import Layout from "../../components/layout/Layout";
function Cv() {
    return (
        <motion.div className={styles.container}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1  }}
                    transition={{ delay: .2 }}>
            <div className={styles.cv_body}>
                <div className={styles.cv}>
                    <div className={styles.content}>
                        <div className={styles.grid_3}>
                            <div className={styles.img}>
                                <img
                                    src="me2.jpg"
                                    alt=""/>
                            </div>
                            <div className={styles.title}>
                                <div className={styles.name}>
                                    Mahmoud Okily
                                </div>
                                <div className={styles.job}>
                                    Full-stack web Developer
                                </div>
                                <div className={styles.job}>
                                    Italy, como ,22063
                                </div>
                                <div className={styles.job}>
                                    tel : 3332432718
                                </div>

                            </div>
                            <div className={styles.contact}>
                                <ul>
                                    <li><a href='http://www.mahmoudokily.me' target="_blank">mahmoudokily.me</a></li>
                                    <li><a href="mailto:okilymahmoud48@gmail.com"> mahmoudokily@gmail</a></li>
                                    <li>
                                        <a href='https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/' target="_blank">mahmoudokily@linkdin</a>
                                    </li>
                                </ul>

                            </div>
                            <div className={styles.social}>
                                <div className={styles.social_body}>

                                    <a href="https://www.instagram.com/midooimam/" target="_blank">
                                        <div>
                                            <FaInstagram/>
                                        </div>
                                    </a>

                                    <a href='https://www.facebook.com/mahmoudhassan993/' target="_blank">
                                        <div>
                                            <AiFillFacebook/>
                                        </div>
                                    </a>

                                    <a href="mailto:okilymahmoud48@gmail.com" target="_blank">
                                        <div>
                                            <SiGmail/>
                                        </div>
                                    </a>
                                    <a href='https://twitter.com/hesham_alamam' target="_blank">
                                        <div>
                                            <AiFillTwitterSquare/>
                                        </div>
                                    </a>


                                    <a href='https://github.com/heshamalamam73' target="_blank">
                                        <div>
                                            <AiFillGithub/>
                                        </div>
                                    </a>
                                    <a href='https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/' target="_blank">
                                        <div>
                                            <AiFillLinkedin/>
                                        </div>
                                    </a>


                                </div>


                            </div>
                        </div>
                        <div className={styles.gris_2}>
                            <div></div>
                            <div className={styles.right}>
                                <div className={styles.sec_head}>
                                    Skills
                                </div>
                                <ul className={styles.skill_item}>
                                    <li>
                                        Back-end: JavaScript, node.js, SQL databases,Mangodb
                                    </li>
                                    <li>
                                        Front-end: JavaScript, TypeScript, React (with Hooks), Redux, next.js

                                    </li>
                                    <li>
                                        DevOps: configured and maintained web servers through AWS CDK, AWS CloudFormation,
                                        Ansible, Docker, Chef, SSH. Knowledge of whole AWS stack and experienced in
                                        configuring it.

                                    </li>
                                    <li>
                                        Attentive to UI/UX details and high code quality. Fan of unit tests, functional
                                        programming, typed interfaces,

                                    </li>

                                    <li>
                                        Used to participate in algorithm programming competitions.

                                    </li>
                                    <li>
                                        Open to evolving in: Java, Python, and many else.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Experiance
                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>        2017-2020</div>
                            <li >
                                freelancer

                            </li>

                        </ul>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Education
                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>
                                <span>Assuit university <br/></span>
                                2012-2016
                            </div>
                            <li>faculty of commerce</li>
                            <div className={styles.date}>
                                <span>self study <br/></span>
                                2016-2020
                            </div>
                            <li>online courses </li>

                        </ul>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Other perks

                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>

                            </div>
                            <li>In his free time, likes to blog, dance, travel, and play tennis.</li>
                            <div></div>
                            <li>Speaks native arabic, fluent English,italian and basic French.</li>


                        </ul>

                    </div>
                </div>
            </div>


        </motion.div>
    )

}


export default Cv;
