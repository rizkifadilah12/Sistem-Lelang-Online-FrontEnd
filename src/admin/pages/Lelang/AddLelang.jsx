import React, { useEffect } from "react";
import Layout from "../Layout";
import FormAddLelang from "../../components/lelang/FormAddLelang";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const AddLelang = () => {
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
    if (user && user.role !== "petugas") {
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <>
    <Helmet>
      <title>Tambah Lelang</title>
    </Helmet>
    <Layout>
      <FormAddLelang />
    </Layout>
    </>
  );
};

export default AddLelang;
