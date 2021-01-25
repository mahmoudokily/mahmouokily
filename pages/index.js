import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {FaInstagram} from 'react-icons/fa'
import {AiFillFacebook, AiFillTwitterSquare, AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import Layout from "../components/layout/Layout.js";
import Link from 'next/link'
import {motion} from "framer-motion";

export default function Home() {
    return (
        <Layout >
            <motion.div className={styles.container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1  }}
                        transition={{ delay: .2 }}>
            <h1 className={styles.name}>
             hello, i'm okily ,,
            </h1>
            <div className={styles.job_title}>
                a full-stack Javascript web developer
            </div>
            <div className={styles.codeLang}>
                Reactjs , Nextjs , Nodejs
            </div>
            <div className={styles.home_btns}>
                <button><Link href='/portfolio'> Portfolio</Link></button>
                {/*<button><Link href='/myoffer'> My Offer</Link></button>*/}

            </div>


            </motion.div>
        </Layout>

    )
}
