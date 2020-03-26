import React from "react";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="text-left py-10 flex flex-col items-center justify-center">
        <div>Who Am I?</div>
      </div>
      <div className="text-left py-10 flex flex-col items-center justify-center">
        <div>Projects I am proud of</div>
      </div>
      <div className="text-left py-10 flex flex-col items-center justify-center">
        <div>My Current Tech Stacks</div>
      </div>
      <div className="text-left py-10 flex flex-col items-center justify-center">
        <div>Techs I have Used Before</div>
      </div>
      <div className="text-left py-10 flex flex-col items-center justify-center">
        <div>Some Achievment worth mentioning</div>
      </div>
    </Layout>
  );
};

export default AboutPage;
