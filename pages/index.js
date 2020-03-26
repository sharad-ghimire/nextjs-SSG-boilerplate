import { FaMediumM } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Layout from "../components/Layout";
import {
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiTwitter,
  FiInstagram
} from "react-icons/fi";

let posts = [{}, {}, {}];
const Home = () => {
  const darkTheme = useContext(ThemeContext);
  return (
    <Layout>
      <div className="bg-background-primary text-left py-10 flex flex-col items-center justify-center">
        <div>
          <img src="/images/srd.png" className="h-40 w-40" />
        </div>
        <div className="mt-4">
          <div className="text-primary-500 text-xl uppercase text-center ">
            Hi. Hello. Namaste.
          </div>
          <div className="text-content-primary text-5xl">Sharad Ghimire</div>
          <div className="text-content-secondary text-center  text-xl">
            A Software Engineer
          </div>
        </div>
      </div>

      <div className="bg-background-secondary py-10 px-4 md:px-12 lg:px-56">
        <div className="text-center pb-4">
          <div className="text-content-primary text-3xl">Who Am I?</div>
          <div>
            A graduate developer with strong academic background and some
            commercial experience working in a startup organization. Proven
            ability to take instruction, develop and test a commercial solution
            with minimal supervision and deliver a fully operational solution.
            Education based technologies and the concept of open source always
            excites me. I am looking for a role of Junior to Mid-Level Software
            Engineer, which will allow me to work alongside an expert team.
            Helping to grow and enhance my skills, expertise and knowledge.
          </div>
          <div className="flex items-center justify-center pt-6">
            <Link href="/about">
              <a className="bg-primary-500 text-background-primary p-4 rounded-lg w-1/2 md:w-1/6 text-center text-xl">
                Know Me Better
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-background-primary  py-10">
        <div className="text-center pb-4 flex items-center justify-center">
          <div className="text-content-primary text-3xl px-4">Recent Posts</div>
        </div>
        <div className="flex items-center justify-center flex-wrap">
          {posts.map(blog => (
            <Link href="blogs/first-post">
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
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
        </div>
        <div className="flex items-center justify-center pt-8">
          <Link href="/blogs">
            <a className="bg-primary-500 text-background-primary p-4 rounded-lg w-1/2 md:w-1/6 text-center text-xl">
              See More
            </a>
          </Link>
        </div>
      </div>

      <div className="bg-background-secondary py-10 pb-32">
        <div className="text-center pb-4">
          <div className="uppercase text-primary-500 text-xl">Social Media</div>
          <div className="text-content-primary text-5xl">Let's Be Friends</div>
        </div>
        <div className="flex items-center justify-center flex-wrap w-full">
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between  cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Linked In</span>
            <FiLinkedin />
          </div>
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Github</span>
            <FiGithub />
          </div>
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Facebook</span>
            <FiFacebook />
          </div>
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Medium</span>
            <FaMediumM />
          </div>
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Twitter</span>
            <FiTwitter />
          </div>
          <div className="w-11/12 md:w-1/4 bg-background-primary m-1 p-4 rounded-lg border-primary-500 border border-solid text-2xl flex items-center justify-between cursor-pointer hover:bg-primary-500 hover:text-background-secondary">
            <span>Instagram</span>
            <FiInstagram />
          </div>
        </div>
      </div>
      <div className="bg-background-primary py-10">
        <div className="bg-background-secondary border border-primary-500 border-solid w-11/12 md:w-1/2 rounded -mt-24 shadow-lg m-auto p-8">
          <div className="text-center text-content-secondary text-xl">
            Have any projects in mind? Say Hello at
          </div>
          <div className="text-center text-primary-500 text-2xl md:text-4xl hover:underline cursor-pointer">
            sharadghimire5551@gmail.com
          </div>
        </div>

        <div className="flex items-center justify-center py-4">
          <div className="px-4 text-2xl cursor-pointer hover:text-content-secondary text-content-primary">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className="px-4 text-2xl cursor-pointer hover:text-content-secondary text-content-primary">
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </div>
          <div className="px-4 text-2xl cursor-pointer hover:text-content-secondary text-content-primary">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center py-4">
          <div>
            <FiTwitter
              size="1.5em"
              className="mx-4 cursor-pointer hover:text-primary-500"
            />
          </div>
          <div>
            <FiFacebook
              size="1.5em"
              className="mx-4 cursor-pointer hover:text-primary-500"
            />
          </div>
          <div>
            <FiInstagram
              size="1.5em"
              className="mx-4 cursor-pointer hover:text-primary-500"
            />
          </div>
        </div>
        <div className="py-4 text-content-secondary text-center text-xl">
          Copyright &copy; Sharad Ghimire. All rights preserved
        </div>
      </div>
    </Layout>
  );
};

export default Home;
