import Layout from "../Layout";
import { useEffect } from "react";
import Product from "../../components/home/Product";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/atuhSliceFront";
import LoadingPage from "../../components/home/LoadingPage";


import React from 'react'
import { Helmet } from "react-helmet";
  
const DashboardFront = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError,isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <>
    <Helmet>
      <title>Dashboard</title>
    </Helmet>
    <Layout>
       {isLoading ? <LoadingPage/> : <Product/>} 
    </Layout>
    </>
  )
}

export default DashboardFront;