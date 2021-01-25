import styles from "../P.module.css";

import {FiExternalLink} from 'react-icons/fi'

import Layout from "../../../components/layout/Layout";
import Link from "next/link";

function Yalpcamp() {
    return (
        <Layout>
            <div className={styles.details}>
                <div className={styles.h1}>
                    YalpCamp
                </div>
                <div className={styles.p}>
                    Look for your favorite place to spend short trips

                </div>
                <div className={styles.p_bold}>
                    yalpcamp is a web platform that allows to book and sell local tours and
                    tourist attractions all over the world.
                </div>
                <ul className={styles.project_desc}>
                    <li>
                        You can search for your favorite place with simple steps and view a lot
                        of its pictures
                    </li>
                    <li>
                        You can see all the places available in a certain area around the world
                    </li>
                    <li>
                        You can add places for sale, determine the geographical location, and
                        add the middle of the mall for easy sale and inspection
                    </li>

                </ul>
                <div className={styles.more}>
                    <button>
                        <Link href='https://yalpcamps.herokuapp.com/'><a className={styles.a}>
                            <div className={styles.icon}>
                                <FiExternalLink/>
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
                        <img src="../yalpcamp.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../yalpcamp2.png" alt=""/>

                    </div>
                    <div className={styles.full_img}>
                        <img src="../yalpcamp3.png" alt=""/>

                    </div>


                </div>
                <div className={styles.mobile}>
                    <div className={styles.mobile_head}>
                        Mobile version
                    </div>

                    <div className={styles.grid_2}>
                        <div>
                            <img src="../ycs1.png" alt=""/>
                        </div>
                        <div>
                            <img src="../ycs3.png" alt=""/>
                        </div>

                    </div>

                </div>


            </div>


        </Layout>

    )
}

export default Yalpcamp;