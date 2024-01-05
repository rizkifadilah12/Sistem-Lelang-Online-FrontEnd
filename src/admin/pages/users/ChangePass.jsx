import React, { useEffect } from "react";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../../features/authSlice";
import Pass from "../../components/users/ChangePass";

const EditPass = () => {
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
    if (user && user.role !== "admin") {
      navigate("/backend/dashboard");
    }
  }, [isError, user, navigate]);
  return (
    <Layout>
      <Pass />
    </Layout>
  );
};

export default EditPass;
