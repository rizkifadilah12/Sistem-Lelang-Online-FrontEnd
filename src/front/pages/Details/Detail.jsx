import Layout from "../Layout";
import Detail from "../../components/detail/Detail";
import React from 'react'
import { Helmet } from "react-helmet";

const Details = () => {
  return (
  <>
  <Helmet>
    <title>Detail</title>
  </Helmet>
    <Layout>
        <Detail/>
    </Layout>
   </>
  )
}

export default Details;