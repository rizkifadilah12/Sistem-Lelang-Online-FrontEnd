
import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddGambar from "../../components/Gambar/FromAddGambar";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const Gambar = () => {
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
      <title>Tambah Gambar</title>
    </Helmet>
    <Layout>
      <AddGambar />
    </Layout>
    </>
  );
};

export default Gambar;
