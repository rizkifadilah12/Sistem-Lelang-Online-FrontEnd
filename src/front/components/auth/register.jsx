import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import PersonIcon from '@mui/icons-material/Person';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import ContactsIcon from '@mui/icons-material/Contacts';
import swal from "sweetalert";
import { Helmet } from "react-helmet";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nik, setNik] = useState("");
  const [nama, setNama] = useState("");
  const [jk, setJk] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/masyarakat", {
        email: email,
        password: password,
        nik: nik,
        nama: nama,
        jk: jk,
        no_hp: no_hp,
        alamat: alamat,
      });
      swal({
        icon: "success",
        text: "Register Berhasil"
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <>
    <Helmet>
      <title>Register</title>
    </Helmet>
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={saveUser} className="box">
                <p className="has-text-centered">{msg}</p>
                <h1 className="title is-2">Register</h1>
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

                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      className="input"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder="Nama"
                    />
                <span class="icon is-small is-left">
                      <i><PersonIcon/></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="number"
                      className="input"
                      value={nik}
                      onChange={(e) => setNik(e.target.value)}
                      placeholder="NIK"
                    />
                    <span class="icon is-small is-left">
                      <i><PrivacyTipIcon/></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={jk}
                        onChange={(e) => setJk(e.target.value)}
                      >
                        <option value="#">--Jenis Kelamin--</option>
                        <option value="laki-laki">Laki-Laki</option>
                        <option value="perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                <p class="control has-icons-left has-icons-right">
                    <input
                      type="text"
                      className="input"
                      value={no_hp}
                      onChange={(e) => setNoHp(e.target.value)}
                      placeholder="+62 **** **** ****"
                    />
                 <span class="icon is-small is-left">
                      <i><ContactsIcon/></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div className="field">
                    <textarea
                    className="input"
                      name="postContent"
                      rows={5}
                      cols={43}
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Alamat"
                    />
                  
                </div>
                <div></div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth"
                  >
                    Register
                  </button>
                  <Link to={"/login"}>Have Account?</Link>
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
export default Register;
