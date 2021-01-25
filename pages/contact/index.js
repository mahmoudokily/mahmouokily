import Layout from "../../components/layout/Layout.js";
import styles from './Contact.module.css'
import {AiFillGithub} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
import {motion} from "framer-motion";
function Contact() {
    return(
        <Layout>
            <motion.div className={styles.container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1  }}
                        transition={{ delay: .2 }}>
                <div className={styles.head}>Contact Me
                </div>
                <div className={styles.p}>I am available for hire and open to any ideas of cooperation.
                </div>
                <div className={styles.table}>
                    <ul className={styles.ul_parent}>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>    Website :</li>
                                <li><a href="http://www.mahmoudokily.me"> Mahmoud okily@internet</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>    E-mail  :</li>
                                <li><a href="mailto:okilymahmoud48@gmail.com"> Mahmoud okily @gmail</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>Github :</li>
                                <li> <a href='https://github.com/heshamalamam73'>     Mahmoud okily@github</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>Facebook :</li>
                                <li> <a href='https://www.facebook.com/mahmoudhassan993/'>     Mahmoud okily@facebook</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>Twiter :</li>
                                <li> <a href='https://twitter.com/hesham_alamam'>     Mahmoud okily@twiter</a></li>
                            </ul>
                        </li>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>Linkedin :</li>
                                <li> <a href='https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/'>     Mahmoud okily@linkedin</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </motion.div>
        </Layout>

    )

}
export default Contact