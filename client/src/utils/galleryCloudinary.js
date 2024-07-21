import axios from "axios";

export const allGalleryImages = async () => {
  try {
    const result = await axios.get(
      "https://harish-school.onrender.com/api/gallery/allGalleryImages"
    );
    return result;
  } catch (error) {
    console.error("Axios gallery upload error: " + error);
  }
};
