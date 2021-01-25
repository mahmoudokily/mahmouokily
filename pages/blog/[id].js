import styles from './Artical.module.css'
import {blogs} from '../../components/blogs'
import {AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {IoArrowBackOutline, IoArrowForwardSharp} from 'react-icons/io5'
import {GrLinkNext} from 'react-icons/gr'
import {useEffect } from 'react'
import Link from "next/link";

function Artical({id}) {

    const currentartical = blogs.filter(i => i.id === id)[0]
   function incr(){
       let next = Number(id) +1
       if(next > blogs.length){
            next = 1;
        }
        return next;
   }
   function dec(){
       let num = Number(id) -1
       if (num < 1){
           num = ""
       }
       return num;
   }
    return (
        <div className={styles.container}>
            <div className={styles.article}>
                <div className={styles.head}>
                    <div className={styles.title}>
                        {currentartical.title}
                    </div>
                    <div className={styles.date}>
                        {currentartical.date}
                    </div>
                    <div className={styles.body}>
                        <div className={styles.img}>
                            <img src={currentartical.img} alt=""/>
                        </div>
                        <div className={styles.p}>
                            {currentartical.desc}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h1}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p1}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h2}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p2}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h3}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p3}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h4}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p4}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h5}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p5}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h6}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p6}
                        </div>
                        <div className={styles.h2}>
                            {currentartical.h7}
                        </div>
                        <div className={styles.p}>
                            {currentartical.p7}
                        </div>

                    </div>

                </div>
                <div className={styles.share}>
                    <a href='https://www.facebook.com/mahmoudhassan993/' target="_blank">
                        <div>
                            <AiFillFacebook/>
                        </div>
                    </a>
                    <a href='https://twitter.com/hesham_alamam' target="_blank">
                        <div>
                            <AiFillTwitterSquare/>
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/mahmoud-okily-3ab3a7b6/' target="_blank">
                        <div>
                            <AiFillLinkedin/>
                        </div>
                    </a>

                </div>


            </div>
            <div className={styles.related}>
              <div className={styles.head}>
                  Most Recent Articals
              </div >
                {blogs.map((blog)=> (
                    <div className={styles.related_item}>
                        <div className={styles.related_title} >
                            <Link href={`/blog/`+ blog.id}>{blog.title}</Link>

                        </div>
                        <div className={styles.related_date}>
                            {blog.date}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.control}>
                <Link href={'/blog/'+dec()}>
                    <div className={styles.control_item}>

                        <div className={styles.icon}>
                            <IoArrowBackOutline/>
                        </div>
                        <div>
                            Forword
                        </div>
                    </div>

                </Link>
                <Link href='/blog'>
                    <div className={styles.control_item}>
                        ALL Articals
                    </div>
                </Link>
                <Link href={`/blog/`+incr() }>
                    <div className={styles.control_item}>
                        <div>
                            Next

                        </div>
                        <div className={styles.icon}>
                            <IoArrowForwardSharp/>
                        </div>


                    </div>

                </Link>


            </div>

        </div>
    )
}
Artical.getInitialProps = ({ query: { id } }) => {
    return { id };
};


export default Artical;