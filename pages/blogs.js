import React from "react";
import fs from "fs";
import Link from "next/link";
import Layout from "../components/Layout";

const Blogs = ({ slugs }) => {
  return (
    <Layout>
      <div className="flex items-center justify-center flex-wrap">
        {slugs.map(slug => (
          <Link href={`blogs/${slug}`}>
            <a>
              <div className="mx-2 mt-4 ">
                <div className="max-w-sm rounded rounded-lg overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-background-primary text-content-primary border border-solid">
                  <img
                    className="w-full"
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                    alt="Sunset in the mountains"
                  />
                  <div className="flex items-center justify-start  py-4 border-b border-gray-400 border-solid px-6">
                    <img
                      className="w-20 h-20 -mt-16 rounded-full mr-4  border-4 border-solid border-gray-200"
                      src="/images/srd.png"
                      alt="Avatar of Sharad"
                    />
                    <div className="text-md pl-2">
                      <p className="text-content-primary text-xl leading-none font-bold">
                        Sharad Ghimire
                      </p>
                      <p className="text-content-secondary">Aug 18</p>
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      The Coldest Sunset
                    </div>
                    <p className="text-content-secondary text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus quia, nulla! Maiores et perferendis eaque,
                      exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div className="px-6 py-4 bg-background-secondary">
                    <span className="mt-2 inline-block bg-content-secondary rounded-full px-3 py-1 text-sm font-semibold text-background-primary mr-2">
                      #photography
                    </span>
                    <span className="mt-2 inline-block bg-content-secondary rounded-full px-3 py-1 text-sm font-semibold text-background-primary mr-2">
                      #travel
                    </span>
                    <span className="mt-2 inline-block bg-content-secondary rounded-full px-3 py-1 text-sm font-semibold text-background-primary">
                      #winter
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
        <style jsx>{`
          pre {
            margin-top: 0.5em;
            margin-bottom: 0.5em;
          }
          h1 {
            font-weight: bold;
          }
        `}</style>
      </div>
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
