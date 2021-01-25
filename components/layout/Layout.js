import styles from "./Layout.module.css";
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillTwitterSquare} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import Header from '../header/Header'
import Nav from "../mobile/Nav";
import Footer from "../footer/footer";
import {useEffect} from 'react'

function Layout ({children, title}){


    return(
        <div  className={styles.grid_2}>
            <div className={styles.grid_left}>
                <Header />
            </div>
            <div className={styles.mobile_nav}>
                <Nav/>
            </div>
            <div id='child'>  {children}</div>
            <Footer/>
        </div>

    )
}
export default Layout