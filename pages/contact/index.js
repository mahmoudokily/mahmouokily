import Layout from "../../components/layout/Layout.js";
import styles from './Contact.module.css'
import {AiFillGithub} from "react-icons/ai";
import {SiGmail} from "react-icons/si";
function Contact() {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.head}>Contact Me
                </div>
                <div className={styles.p}>I am available for hire and open to any ideas of cooperation.
                </div>
                <div className={styles.table}>
                    <ul className={styles.ul_parent}>
                        <li>
                            <ul className={ styles.ul_child}>
                                <li>    E-mail  :</li>
                                <li><a href="mailto:okilymahmoud48@gmail.com"> Okily mahmoud@gmail</a></li>
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
            </div>
        </Layout>

    )

}
export default Contact