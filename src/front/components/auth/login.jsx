import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../../features/atuhSliceFront";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const LoginFront = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      swal({
        icon: "success",
        text: "Welcome"
      });
      navigate("/");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <>
    <Helmet>
      <title>Log In</title>
    </Helmet>
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={Auth} className="box">
                {isError && <p className="has-text-centered">{message}</p>}
                <h1 className="title is-2">Sign In</h1>
                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="email"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                    <span class="icon is-small is-left">
                      <i><EmailIcon/></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  <span class="icon is-small is-left">
                      <i><LockPersonIcon/></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div>
                <Link
          to={'/Register'}
                >
                  No Have Account?
                </Link>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default LoginFront;
