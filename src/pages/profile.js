import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { axiosPrivate } from "../api/axios";
import { AuthContext, UserId } from "../App";
import Header from "../components/Header";
import { MainInfo } from "../components/MainInfo";
import Main from "./main";
const Profile = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userId = useContext(UserId);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    axiosPrivate.get("/protected")
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <Header />
          <div style={{ marginTop: '80px', padding: '10px' }}>
            <MainInfo />
          </div>
          <div style={{padding:'10px'}}>
            <Outlet />
          </div>
          

        </div>
      )}
    </>
  );
};
export default Profile