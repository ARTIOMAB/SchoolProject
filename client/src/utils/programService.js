import axios from "axios";

export const uploadProgram = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/programs/createProgram",
      {
        programType: programType,
        title: title,
        date: date,
      }
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Axios error" + error);
  }
};

export const getPrograms = async (programType) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/programs/getProgramByType/${programType}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Axios error" + error);
  }
};
