import Layout from "../Layout";
import Edit from "../../components/auth/ChangePassword";
import React from 'react'
import { Helmet } from "react-helmet";

const ChangePass = () => {
  return (
    <>
    <Helmet>
        <title>Ubah Password</title>
    </Helmet>
    <Layout>
        <Edit/>
    </Layout>
    </>
  )
}

export default ChangePass;