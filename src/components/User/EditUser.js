import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const getUserApi = "https://66ff48322b9aac9c997eca14.mockapi.io/api/oss/user";

  useEffect(() => {
    const getUser = () => {
      setIsLoading(true);
      axios
        .get(`${getUserApi}/${id}`)
        .then((item) => {
          setUser(item.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    };

    getUser();
  }, [id]); // 'id'에 의존

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch(`${getUserApi}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        setIsLoading(false);
        navigate("/show-user");
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="user-form">
      <div className="heading">
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}
        <p>Edit Form</p>
      </div>
      {!isLoading && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={user.name || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              value={user.phone || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="height" className="form-label">
              Height
            </label>
            <input
              type="text"
              className="form-control"
              id="height"
              name="height"
              value={user.height || ""}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="feature" className="form-label">
              Feature
            </label>
            <input
              type="text"
              className="form-control"
              id="feature"
              name="feature"
              value={user.feature || ""}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary submit-btn">
            EDIT
          </button>
        </form>
      )}
    </div>
  );
};

export default EditUser;
