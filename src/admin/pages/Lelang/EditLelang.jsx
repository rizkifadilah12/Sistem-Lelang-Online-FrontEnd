import React, { useEffect } from "react";
import Layout from "../Layout";

import LelagEdit from "../../components/lelang/LelangEdit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import { Helmet } from "react-helmet";

const EditLelang = () => {
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
      <title>Edit Lelang</title>
    </Helmet>
    <Layout>
      <LelagEdit />
    </Layout>
    </>
  );
};

export default EditLelang;
