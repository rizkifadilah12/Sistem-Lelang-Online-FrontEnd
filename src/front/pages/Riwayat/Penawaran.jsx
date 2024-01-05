import Layout from "../Layout";
import { useEffect } from "react";
import Riwayat from "../../components/Riwayat/RiwayatPenawaran";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/atuhSliceFront";


import React from 'react'
import { Helmet } from "react-helmet";
  
const RiwayatPenawaran = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

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
      <title>Riwayat Penawaran</title>
    </Helmet>
    <Layout>
        <Riwayat/>
    </Layout>
    </>
  )
}

export default RiwayatPenawaran;