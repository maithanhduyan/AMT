/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateUser = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/api/users/${id}`, {
      name: name,
      email: email,
      password: password,
    });
    navigate("/");
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/api/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setPassword(response.data.password);
  };

  return (
    <div>
      <form onSubmit={updateUser}>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Email</label>
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Password</label>
          <input
            className="input"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="field">
          <button className="button is-primary">Back</button>
          <button className="button is-primary">Update</button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
