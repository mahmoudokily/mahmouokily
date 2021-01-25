import styles from "./Layout.module.css";
import head from 'next'
import {FaInstagram} from "react-icons/fa";
import {AiFillFacebook, AiFillGithub, AiFillTwitterSquare} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import Header from '../header/Header'
import Nav from "../mobile/Nav";
import Footer from "../footer/footer";
import {useEffect} from 'react'

function Layout({children, title}) {


    return (
        <div className={styles.grid_2}>
            <head>
                <title> Mahmoud okily</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>

            </head>
            <div className={styles.grid_left}>
                <Header/>
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