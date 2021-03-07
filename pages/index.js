import styles from '../styles/Home.module.css'
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
                <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1  }}
                            transition={{ delay: .6 }}>
            <h2 className={styles.name}>
               <span className={styles.htmlAnim}> &lt;h2&gt;</span> hello, i'm okily ,,  <span className={styles.htmlAnim}>&lt;/h2&gt;</span>
            </h2>
            <div className={styles.job_title}>
             a full-stack Javascript web developer
            </div>
            <div className={styles.codeLang}>
               Reactjs , Nodejs
            </div>
            <div className={styles.home_btns}>
                <Link href='/portfolio'><button> Portfolio </button></Link>
                <Link href='/myoffer'><button> My Offer </button></Link>
            </div>
                </motion.div>
            </motion.div>
        </Layout>

    )
}
