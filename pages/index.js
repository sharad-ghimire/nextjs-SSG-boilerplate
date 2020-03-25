import Link from "next/link";
const Home = () => (
  <div className="container">
    <div>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
    </div>
  </div>
);

export default Home;
