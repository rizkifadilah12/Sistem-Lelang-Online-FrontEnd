import React, { useEffect } from "react";
import Layout from "../Layout";
import BarangList from "../../components/Barang/BarangList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const Barang = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/backend");
    }
  }, [isError, navigate]);

  return (
    <>
    <Helmet>
      <title>Barang List</title>
    </Helmet>
    <Layout>
      <BarangList />
    </Layout>
    </>
  );
};

export default Barang;