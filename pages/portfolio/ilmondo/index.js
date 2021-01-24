import styles from "../P.module.css";

import {AiOutlineFolderView} from "react-icons/ai";

import Layout from "../../../components/layout/Layout";
import Link from "next/link";

function Ilmondo() {
    return (
        <Layout>
            <div className={styles.details}>
                <div className={styles.h1}>
                    Ilmondo
                </div>
                <div className={styles.p}>
                    Learn the statistics of your country
                </div>
                <div className={styles.p_bold}>
                    ilmondo is a web platform that allows you to know the statistics of your
                    country and alot of other countries .
                </div>
                <ul className={styles.project_desc}>
                    <li>
                        You can search for your country and know the statistics such as
                        population , area , Languages , Borders
                    </li>
                    <li>
                        All data are automatically renewed according to the latest statistics
                        for countries
                    </li>

                </ul>
                <div className={styles.more}>
                    <button>
                        <Link href='https://ilmondo.herokuapp.com/'><a className={styles.a}>
                            <div className={styles.icon}>
                                <AiOutlineFolderView/>
                            </div>
                            View online
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
                        <img src="../ilm1.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../ilm2.png" alt=""/>

                    </div>



                </div>
                <div className={styles.mobile}>
                    <div className={styles.mobile_head}>
                        Mobile version
                    </div>

                    <div className={styles.grid_2}>
                        <div>
                            <img src="../ilms1.png" alt=""/>
                        </div>
                        <div>
                            <img src="../ilms2.png" alt=""/>
                        </div>

                    </div>

                </div>


            </div>


        </Layout>

    )
}

export default Ilmondo;