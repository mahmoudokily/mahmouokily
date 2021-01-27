import styles from "../P.module.css";

import {FiExternalLink} from 'react-icons/fi'

import Layout from "../../../components/layout/Layout";
import Link from "next/link";
import {motion} from "framer-motion";
import {AiFillGithub} from "react-icons/ai";

function Amazon() {
    return (
        <Layout>
            <motion.div className={styles.details}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1  }}
                        transition={{ delay: .2 }}>
                <div className={styles.h1}>
                    Amazon
                </div>
                <div className={styles.alert}>
                    Work is in progress
                </div>
                <div className={styles.p}>
                    Online shop for buying and selling
                </div>
                <div className={styles.p_bold}>
                    Amazon clone is a web platform Similar to the famous Amazon site, through
                    which you can buy and sell all kinds of products and receive them at your
                    favorite location.
                </div>
                <ul className={styles.project_desc}>
                    <li>
                        You can order products online and search for the best prices
                    </li>
                    <li>
                        You can track your order and see a list of all orders that were
                        requested on your profile
                    </li>
                    <li>You can take advantage of many offers and discounts that are updated
                        daily
                    </li>
                </ul>

                <div className={styles.more}>
                    <button>
                        <Link href='https://amazon2021.herokuapp.com/'><a className={styles.a}>
                            <div className={styles.icon}>
                                <FiExternalLink/>
                            </div>
                            View online
                        </a></Link>
                    </button>
                    <button>
                        <Link href='https://github.com/heshamalamam73/amazon_clone'><a className={styles.a}>
                            <div className={styles.icon}>
                                <AiFillGithub/>
                            </div>
                            Github repository
                        </a></Link>
                    </button>
                </div>
                <div className={styles.tecno}>
                    <div className={styles.tecno_head}>
                        TECHNOLOGIES
                    </div>
                </div>
                <ul className={styles.tecno_body}>
                    <li><a href="#">React</a></li>
                    <li><a href="#">Redux</a></li>
                    <li><a href="#">Reactstrap</a></li>
                    <li><a href="#">Nodejs</a></li>
                    <li><a href="#">MapBox</a></li>
                </ul>
                <div className={styles.images}>
                    <div className={styles.full_img}>
                        <img src="../amzn1.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../amzn2.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../amzn3.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../amzn4.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../amzn5.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../amzn6.png" alt=""/>

                    </div>


                </div>
                <div className={styles.mobile}>
                    <div className={styles.mobile_head}>
                        Mobile version
                    </div>

                    <div className={styles.grid_2}>
                        <div>
                            <img src="../amzns1.png" alt=""/>
                        </div>
                        <div>
                            <img src="../amzns2.png" alt=""/>
                        </div>

                    </div>

                </div>


</motion.div>

        </Layout>

    )
}

export default Amazon;