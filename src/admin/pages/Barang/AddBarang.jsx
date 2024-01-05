
import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import FormAddBarang from "../../components/Barang/FormAddBarang";
import { Helmet } from "react-helmet";

const AddBarang = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/backend");
    }
  }, [isError, user, navigate]);
  return (
    <>
    <Helmet>
      <title>Tambah Barang</title>
    </Helmet>
    <Layout>
      <FormAddBarang />
    </Layout>
    </>
  );
};

export default AddBarang;
