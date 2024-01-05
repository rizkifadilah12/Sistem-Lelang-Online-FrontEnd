import Layout from "../Layout";
import Edit from "../../components/auth/Edit";
import React from 'react'
import { Helmet } from "react-helmet";
const EditMas = () => {
  return (
    <>
    <Helmet>
      <title>Edit Profile</title>
    </Helmet>
    <Layout>
        <Edit/>
    </Layout>
    </>
  )
}

export default EditMas;