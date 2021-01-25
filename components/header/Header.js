import styles from "./Header.module.css";
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillTwitterSquare, AiFillLinkedin} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import Link from 'next/link'

function Header() {
    return (
        <div className={styles.header}>


            <div className={styles.fixed}>
                <div className={styles.head}>
                    <div className={styles.head_img}>
                        <img
                            src='/me2.jpg'
                            alt=""/>
                    </div>
                    <div className={styles.head_text}>
                        <div className={styles.h1}>Mahmoud Okily</div>
                        <div className={styles.h2}>Full-Stack Web Developer</div>
                    </div>
                </div>
                <ul className={styles.nav_items}>
                    <li className={styles.nav_item}><Link href='/'>Home</Link></li>
                    <li className={styles.nav_item}><Link href='/portfolio'>Portfolio</Link></li>
                    {/*<li className={styles.nav_item}> My Offer</li>*/}
                    <li className={styles.nav_item}><Link href='/contact'>Contact Me</Link></li>
                </ul>
                <ul className={styles.cv_items}>
                    <li className={styles.nav_item}>  <Link href='/cv'>My Cv</Link></li>
                    <li className={styles.nav_item}> Personal Blog</li>
                </ul>
                <div className={styles.social}>
                    <div className={styles.social_head}>
                        Get In Touch
                    </div>
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
        </div>
    )
}

export default Header;