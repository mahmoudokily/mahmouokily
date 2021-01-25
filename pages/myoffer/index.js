import Layout from "../../components/layout/Layout";
import styles from './Myoffer.module.css'
import {CgMail} from 'react-icons/cg'
import {SiGmail} from 'react-icons/si'
import {motion} from "framer-motion";
function Myoffer (){
    return (
        <Layout >
            <motion.div className={styles.container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1  }}
                        transition={{ delay: .2 }}>
                <div className={styles.head}>
                    My offer
                </div>

                <div className={styles.item}>
                    <div className={styles.h1}>
                        UI/UX DESIGN

                    </div>
                    <div className={styles.p}>
                        UI/UX involves planning and iterating a site's structure and layout. Once the proper information architecture is in place, I design the visual layer to create a beautiful user experience.

                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.h1}>
                        FRONT END DEVELOPMENT

                    </div>
                    <div className={styles.p}>
                        Front End Development is building out the visual components of a website. Using HTML, CSS , and Javascript, Reactjs , nextjs  I build fast, interactive websites. This also may include a CMS, API's or other integrations.


                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.h1}>
                        Back END DEVELOPMENT

                    </div>
                    <div className={styles.p}>
                        Back End Development is building out the server of a website. Using Javascript, Nodejs , express framework  I build fast, interactive websites server . This also may include a CMS, API's or other integrations.


                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.h1}>
                        PRODUCT DEVELOPMENT

                    </div>
                    <div className={styles.p}>
                        The work that I am most interested in is 0-1 work (helping you get your idea into the world)

                    </div>
                </div>
                <div className={styles.email}>
                    <div className={styles.p}>
                        Interested in doing a project together?
                    </div>
                    <button>

                        <a href="mailto:okilymahmoud48@gmail.com"> Email Me</a>

                        <div className={styles.icon2}>
                            <SiGmail />

                        </div>
                    </button>

                </div>
            </motion.div>
        </Layout>

    )
}

export default  Myoffer;