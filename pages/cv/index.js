import styles from './Cv.module.css'

function Cv() {
    return (
        <div className={styles.container}>
            <div className={styles.cv_body}>
                <div className={styles.cv}>
                    <div className={styles.content}>
                        <div className={styles.grid_3}>
                            <div className={styles.img}>
                                <img
                                    src="me.jpg"
                                    alt=""/>
                            </div>
                            <div className={styles.title}>
                                <div className={styles.name}>
                                    Mahmoud Okily
                                </div>
                                <div className={styles.job}>
                                    Full-stack web Developer
                                </div>

                            </div>
                            <div className={styles.contact}>
                                <ul>
                                    <li>www.mahmoudokily.it</li>
                                    <li>okilymahmoud48@gmail.com</li>
                                    <li>mahmoudokily@linkdin</li>
                                </ul>

                            </div>
                        </div>
                        <div className={styles.gris_2}>
                            <div></div>
                            <div className={styles.right}>
                                <div className={styles.sec_head}>
                                    Skills
                                </div>
                                <ul className={styles.skill_item}>
                                    <li>
                                        Back-end: JavaScript, node.js, SQL databases,Mangodb
                                    </li>
                                    <li>
                                        Front-end: JavaScript, TypeScript, React (with Hooks), Redux, next.js

                                    </li>
                                    <li>
                                        DevOps: configured and maintained web servers through AWS CDK, AWS CloudFormation,
                                        Ansible, Docker, Chef, SSH. Knowledge of whole AWS stack and experienced in
                                        configuring it.

                                    </li>
                                    <li>
                                        Attentive to UI/UX details and high code quality. Fan of unit tests, functional
                                        programming, typed interfaces,

                                    </li>

                                    <li>
                                        Used to participate in algorithm programming competitions.

                                    </li>
                                    <li>
                                        Open to evolving in: Java, Python, and many else.

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Experiance
                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>        2017-2020</div>
                            <li >
                                freelancer

                            </li>

                        </ul>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Education
                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>
                                <span>Assuit university <br/></span>
                                2012-2016
                            </div>
                            <li>faculty of commerce</li>
                            <div className={styles.date}>
                                <span>self study <br/></span>
                                2016-2020
                            </div>
                            <li>online courses </li>

                        </ul>
                        <div className={styles.gris_2}>
                            <div>
                            </div>
                            <div>
                                <div className={styles.sec_head}>
                                    Other perks

                                </div>


                            </div>
                        </div>
                        <ul className={styles.item}>
                            <div className={styles.date}>

                            </div>
                            <li>In his free time, likes to blog, dance, travel, and play tennis.</li>
                            <div></div>
                            <li>Speaks native arabic, fluent English,italian and basic French.</li>


                        </ul>

                    </div>
                </div>
            </div>


        </div>
    )

}


export default Cv;
<div className={styles.skills}>
    <div></div>
    <div className={styles.skills_body}>
        <div className={styles.sec_head}>
            Skills
        </div>



    </div>
    <div>
        <div className={styles.date}>
            2016-2020
        </div>
    </div>
    <div className={styles.skills_body}>





    </div>

    <div className={styles.date}>
        <div>assuit university -Egypt 2012-2016</div>

        <div>2016-2020</div>
    </div>

    <div className={styles.skills_body}>
        <div className={styles.sec_head}>
        </div>
        <ul>
            <li className={styles.parent}>
                univercity of commerce and economia

            </li>
            <li>
                self study (online courses)
            </li>

        </ul>


    </div>


</div>
