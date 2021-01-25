import styles from './Nav.module.css'
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare,AiOutlineMenu} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import Link from "next/link";
import {useEffect,useState} from 'react'


function Nav(){
    const [active , setActive ]= useState(false)
    useEffect(()=>{
        const child = document.getElementById("child")

        const list = document.getElementById("more_navs")
        child.addEventListener("click", function (){
            list.classList.remove(styles.active)
        })

    })
    const handleshowLinks = ()=>{
        const list = document.getElementById("more_navs")
                list.classList.toggle(styles.active)
        }
    return(
        <div className={styles.container}>
            <Link href={'/'}>


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
            </Link>
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
                <div className={styles.hamburger}  onClick={handleshowLinks}>
                    <AiOutlineMenu />

                </div>

            </div>

                <div className={styles.more_navs} id="more_navs">
                    <ul className={styles.nav_items}  >
                        <li className={styles.nav_item}><Link href='/'>Home</Link></li>
                        <li className={styles.nav_item}><Link href='/portfolio'>Portfolio</Link></li>
                        <li className={styles.nav_item}> <Link href='/myoffer'>My Offer</Link> </li>
                        <li className={styles.nav_item}><Link href='/contact'>Contact Me</Link></li>
                    </ul>
                    <ul className={styles.cv_items}>
                        <li className={styles.nav_item}> <Link href='/cv'>My Cv</Link></li>
                        <li className={styles.nav_item}> <Link href='/blog'>Personal Blog</Link></li>
                    </ul>
                </div>

        </div>
    )
}

export default Nav;