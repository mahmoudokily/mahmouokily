import styles from './Nav.module.css'
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillTwitterSquare,AiOutlineMenu} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import Link from "next/link";
import {useEffect,useState} from 'react'


function Nav(){
    const [active , setActive ]= useState(false)
    useEffect(()=>{
        const list = document.getElementById("more_navs")
        if(active){
       list.style.height="auto"

        }else{


        }
    })


    return(
        <div className={styles.container}>
            <div className={styles.head}>
                <div className={styles.head_img}>
                    <img
                        src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/75362182_3833076326718347_3625659778937651200_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=14TNU38xdocAX--c5Ak&_nc_ht=scontent-mxp1-1.xx&oh=dc4abb77d382dfdbd649177e590b600c&oe=602FC337"
                        alt=""/>
                </div>
                <div className={styles.head_text}>
                    <div className={styles.h1}>Mahmoud Okily</div>
                    <div className={styles.h2}>Full-Stack Web Developer</div>
                </div>
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
                <div className={styles.hamburger}  onClick={()=> {setActive(!active)}}>
                    <AiOutlineMenu />

                </div>

            </div>
            {active && (
                <div className={styles.more_navs} id="more_navs">
                    <ul className={styles.nav_items}>
                        <li className={styles.nav_item}><Link href='/'>Home</Link></li>
                        <li className={styles.nav_item}><Link href='/portfolio'>Portfolio</Link></li>
                        <li className={styles.nav_item}> My Offer</li>
                        <li className={styles.nav_item}><Link href='/contact'>Contact Me</Link></li>
                    </ul>
                    <ul className={styles.cv_items}>
                        <li className={styles.nav_item}> <Link href='/cv'>My Cv</Link></li>
                        <li className={styles.nav_item}> Personal Blog</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Nav;