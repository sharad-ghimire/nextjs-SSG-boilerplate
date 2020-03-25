import React from "react";
import fs from "fs";
import Link from "next/link";
import Layout from "../components/Layout";

const Blogs = ({ slugs }) => {
  return (
    <Layout>
      {slugs.map(slug => {
        return (
          <div key={slug}>
            <Link href={`/blogs/${slug}`}>
              <a>Go to {slug}</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Blogs;
