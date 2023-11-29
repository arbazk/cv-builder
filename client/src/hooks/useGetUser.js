import { useCallback, useState } from "react";
import axios from "axios";

const useGetUser = () => {
  const token = localStorage.getItem("token");
  const userId = JSON.parse(localStorage.getItem("user"));
  const [data, setData] = useState(null);
  axios.defaults.baseURL = "http://localhost:3000";

  const getUser = useCallback(async () => {
    try {
      const response = await axios.get(`/api/user/getUser?id=${userId.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseUserData = response.data;

      setData(responseUserData);
    } catch (error) {
      console.log("getDataError", error);
    }
  }, [userId.id, token]);
  return { data, getUser };
};

export default useGetUser;
