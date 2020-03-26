import React, { Fragment } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import ReactMarkdown from "react-markdown";

import Head from "next/head";

import Layout from "../../components/Layout";
import Code from "../../components/Code";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Blog = ({ data, contents }) => {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <div className="w-full flex items-center p-2  hover:text-primary-500">
          <IoIosArrowBack />
          <div className="ml-2 h-full uppercase text-sm text-gray-800 font-bold cursor-pointer hover:text-primary-500">
            <Link href="/blogs">
              <a className="text-content-primary hover:text-primary-500">
                Back to Blogs
              </a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center py-5">
          {data.tags.map(tag => (
            <span className="mt-2 inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="text-center text-2xl px-3 md:px-10">
          <div className="font-bold text-3xl">{data.title}</div>
        </div>
        <div className="w-full flex items-center justify-center p-2">
          <div className="flex flex-col mt-3">
            <div className="text-xl text-content-primary text-center">
              {data.author}
            </div>
            <div className="text-sm text-content-secondary text-center">
              {data.date}
            </div>
            <div className="relative -mb-10 flex items-center justify-center">
              <img
                src="/images/srd.png"
                alt="Author"
                className="w-20 h-20 rounded-full mr-4  border-4 border-solid border-gray-200"
              />
            </div>
          </div>
        </div>
        {/** Hero Image */}
        <div className="-mt-4 px-2 md:px-32 lg:w-10/12 lg:flex lg:items-center lg:justify-center lg:m-auto">
          <img
            src={`https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`}
            alt="Hero"
            className="rounded-md"
          />
        </div>
        <article className="px-3 py-8 md:px-32 lg:px-64">
          <ReactMarkdown
            escapeHtml={false}
            renderers={{
              code: Code
            }}
            source={contents}
          />
        </article>
      </div>
    </Layout>
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
  //const htmlString = marked(parsedContent.content);
  return {
    props: {
      contents: parsedContent.content,
      data: parsedContent.data
    }
  };
};

export default Blog;
