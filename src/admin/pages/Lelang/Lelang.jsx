import React, { useEffect } from "react";
import Layout from "../Layout";
import LelangList from "../../components/lelang/LelangList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const Lelangs = () => {
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
      <title>Lelang List</title>
    </Helmet>
    <Layout>
      <LelangList />
    </Layout>
    </>
  );
};

export default Lelangs;
