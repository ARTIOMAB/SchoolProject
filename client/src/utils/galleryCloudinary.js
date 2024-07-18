import axios from "axios";

export const allGalleryImages = async () => {
  try {
    const result = await axios.get(
      "http://localhost:5000/api/gallery/allGalleryImages"
    );
    return result;
  } catch (error) {
    console.error("Axios gallery upload error: " + error);
  }
};
