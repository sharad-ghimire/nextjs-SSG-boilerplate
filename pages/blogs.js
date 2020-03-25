import React from "react";
import fs from "fs";
import Link from "next/link";

const Blogs = ({ slugs }) => {
  return (
    <div>
      {slugs.map(slug => {
        return (
          <div key={slug}>
            <Link href={`/blogs/${slug}`}>
              <a>Go to {slug}</a>
            </Link>
          </div>
        );
      })}
    </div>
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
