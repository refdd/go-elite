import axios from "axios";

export const baseUrl = "https://api.dubaidaytrips.com/v1";
export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {},
  });
  return data;
};
