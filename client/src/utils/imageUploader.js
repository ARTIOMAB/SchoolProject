import axios from "axios";

export const uploadBoard = async (data) => {
  try {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("text", data.text);
    console.log(formData);

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/board/createBoard`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error uploading board:", error);
  }
};
