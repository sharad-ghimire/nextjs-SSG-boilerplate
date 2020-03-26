import Link from "next/link";
import Layout from "../components/Layout";

function Error({ statusCode }) {
  return (
    <Layout>
      <div className="">Oops!</div>
      <div className="">Nothing to see here!</div>
      {statusCode && <div className="">Status Code: {statusCode}</div>}

      <div className="">
        <Link href="/">
          <button className="">Go Home</button>
        </Link>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
