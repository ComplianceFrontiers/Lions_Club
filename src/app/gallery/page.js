import Gallery from "@/components/Gallery/Gallery";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
export const metadata = {
  title: "Events || Paroti || Non Profit Charity Nextjs Template",
  description: "Non Profit Charity Nextjs Template",
};

const page = () => {
  return (
    <Layout>
      <PageHeader title='Gallery' />
      <Gallery />
    </Layout>
  );
};

export default page;
