import styles from "../P.module.css";

import {FiExternalLink} from 'react-icons/fi'
import {AiFillGithub} from 'react-icons/ai'
import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import {motion} from "framer-motion";

function Ilmondo() {
    return (
        <Layout>
            <motion.div className={styles.details}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1  }}
                        transition={{ delay: .2 }}>

                <div className={styles.h1}>
                    Netflex
                </div>
                <div className={styles.p}>
                    Guarda ciò che vuoi ovunque. Disdici quando vuoi.
                </div>
                <div className={styles.p_bold}>
                    Netflex is a web platform that allows you to show a lot of films from your devices such as mobile phone , pc , tv  online or download them and watch latter
                </div>
                <ul className={styles.project_desc}>
                    <li>
                        i just used  Nextjs to create this website without any libraries (html, css )
                    </li>
                    <li>
                        All data are automatically renewed according to the latest statistics
                        for countries
                    </li>

                </ul>
                <div className={styles.more}>
                        <Link href='https://netflex-nextjs.vercel.app/'><a className={styles.a}>
                            <div className={styles.icon}>
                                <FiExternalLink/>
                            </div>
                            View online
                        </a></Link>

                        <Link href='https://github.com/heshamalamam73/netflex_nextjs/tree/v2'><a className={styles.a}>
                            <div className={styles.icon}>
                                <AiFillGithub/>
                            </div>
                            Github repository
                        </a></Link>

                </div>
                <div className={styles.tecno}>
                    <div className={styles.tecno_head}>
                        TECHNOLOGIES
                    </div>
                </div>
                <ul className={styles.tecno_body}>
                    <li><a href="#">nextjs</a></li>
                    <li><a href="#">html</a></li>
                    <li><a href="#">css</a></li>
                    <li><a href="#">javascript</a></li>
                </ul>
                <div className={styles.images}>
                    <div className={styles.full_img}>
                        <img src="../nf1.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../nf2.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../nf3.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../nf4.png" alt=""/>

                    </div>


                </div>
                <div className={styles.mobile}>
                    <div className={styles.mobile_head}>
                        Mobile version
                    </div>

                    <div className={styles.grid_2}>
                        <div>
                            <img src="../nfs1.png" alt=""/>
                        </div>
                        <div>
                            <img src="../nfs2.png" alt=""/>
                        </div>
                        <div>
                            <img src="../nfs3.png" alt=""/>
                        </div>
                        <div>
                            <img src="../nfs4.png" alt=""/>
                        </div>

                    </div>

                </div>


</motion.div>

        </Layout>

    )
}

export default Ilmondo;