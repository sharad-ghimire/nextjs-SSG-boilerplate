import React, { Fragment } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import marked from "marked";

const Blog = ({ data, contents }) => {
  return (
    <Fragment>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: contents }} />
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  // read the files in the folder posts
  const files = fs.readdirSync("posts");

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));

  return {
    paths,
    fallback: false // build everything at build time
  };
};

// fetch the content of the posts
export const getStaticProps = async ({ params: { slug } }) => {
  const allContents = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  // get all frontmatter
  const parsedContent = matter(allContents);
  // parse to html
  const htmlString = marked(parsedContent.content);
  return {
    props: {
      contents: htmlString,
      data: parsedContent.data
    }
  };
};

export default Blog;
