import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./User.css";

const EditUser = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const getUserApi = "https://66ff48322b9aac9c997eca14.mockapi.io/api/oss/user";

  useEffect(() => {
    const getUser = () => {
      axios
        .get(`${getUserApi}/${id}`)
        .then((item) => {
          setUser(item.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getUser();
  }, [id]); // 'id'만 의존성 배열에 추가

  return (
    <div className="user mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{user.height}</td>
          </tr>
          <tr>
            <td>Feature</td>
            <td>{user.feature}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditUser;
