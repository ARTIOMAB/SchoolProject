import axios from "axios";

export const fetchBoard = async () => {
  try {
    const response = await axios.get(
      `https://harish-school.onrender.com/api/board/getBoardItems`
    );
    return response;
  } catch (error) {
    console.error(
      "Axios error:",
      error.response ? error.response.data : error.message
    );
  }
};

export const findBoardItem = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://harish-school.onrender.com/api/board/findBoardItem`,
      {
        params: { searchTerm: searchTerm },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error finding board item:", error);
  }
};

export const updatedBoardItem = async (id, formData) => {
  try {
    const response = await axios.put(
      `https://harish-school.onrender.com/api/board/updateBoard/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating board item:`, error);
  }
};

export const deleteBoardItem = async (id) => {
  try {
    const response = await axios.delete(
      `https://harish-school.onrender.com/api/board/deleteBoard/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting board item:", error);
  }
};
