import axios from "axios";

axios.defaults.withCredentials = true;

export const login = async (credentials) => {
  try {
    const response = await axios.post(
      `https://harish-school.onrender.com/admin/login`,
      credentials
    );

    return response;
  } catch (error) {
    console.error(
      "Axios error:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
