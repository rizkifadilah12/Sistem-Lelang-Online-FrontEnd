import React, { useEffect } from "react";
import Layout from "../Layout";
import FormEditBarang from "../../components/Barang/FormEditBarang";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const EditBarang = () => {
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
      <title>Edit Barang</title>
    </Helmet>
    <Layout>
      <FormEditBarang />
    </Layout>
    </>
  );
};

export default EditBarang;
