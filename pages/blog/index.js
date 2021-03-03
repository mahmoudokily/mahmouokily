import styles from "./Blog.module.css";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import { blogs } from "../../components/blogs";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import head from "next";

function Blog() {
  const Article = (blogs) => {
    return blogs.map((blog) => {
      return (
        <div className={styles.blog_item}>
          <head>
            <title>Blog</title>
          </head>

          <div className={styles.blog_item_title} id="1">
            {blog.title}
          </div>
          <div className={styles.blog_item_date}>{blog.date}</div>
          <Link href={"/blog/" + blog.id}>
            <div className={styles.blog_item_more}>
              Read More
              <div className={styles.icon}>
                <AiOutlineArrowRight />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <head>
        <title>Blog</title>
      </head>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src="/me2.jpg" alt="" />
        </div>
        <div className={styles.nav}>
          <Link href="/">
            <div className={styles.nav_item}>Home</div>
          </Link>
          <Link href="/portfolio">
            <div className={styles.nav_item}>Portfolio</div>
          </Link>
          <Link href="/blog">
            <div className={styles.nav_item}>Blog</div>
          </Link>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.title}>
          The Blog: Thoughts on life, work and everything in between.
        </div>
        <div className={styles.body}>
          <div className={styles.body_head}>Latest Blog Posts:</div>
          {Article(blogs)}
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
      </div>
      {/*<div className={styles.footer}>*/}
      {/*    <div>*/}
      {/*        copyright : Mahmoud Okily 2021*/}
      {/*    </div>*/}

      {/*</div>*/}
    </motion.div>
  );
}

export default Blog;
