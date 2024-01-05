import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useEffect } from "react";
import swal from "sweetalert";
import KeyIcon from '@mui/icons-material/Key';
const Edit = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [currentPass,setCurrenPass] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMasyarakatById();
  }, []);

  const getMasyarakatById = async () => {
    const response = await axios.get(`http://localhost:5000/masyarakat/${id}`);
    setName(response.data.nama)
  };
  
  
  const updatePassword = async (e) => {
    e.preventDefault();
    try {
        await axios.patch(`http://localhost:5000/password/${id}`, {
        currentPass : currentPass,
        confPassword: confPassword,
        password: password
        });
        swal({
          icon: "success",
          text: "Berhasil Mengganti Password"
        });
        navigate("/");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
  };
  return (
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={updatePassword} className="box">
                <p className="has-text-centered">{msg}</p>
                <h1 className="title is-2">Ubah Password</h1>
                <div className="field">
                  <label className="label">Nama</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Email"
                      readOnly
                    />
                  </div>
                </div>
                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="password"
                      className="input"
                      value={currentPass}
                      onChange={(e) => setCurrenPass(e.target.value)}
                      placeholder="Password Lama"
                    />
                  <span class="icon is-small is-left">
                      <i><KeyIcon/></i>
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
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      placeholder="Password Baru"
                    />
                  <span class="icon is-small is-left">
                      <i><KeyIcon/></i>
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
                      placeholder="Confirmasi Password"
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
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    Update
                  </button>
                 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edit;
