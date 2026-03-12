import axios from "axios";
import { UploadImageResponse } from "../interfaces/upload-image.interface";

const cloudName = process.env.EXPO_PUBLIC_CLOUD_NAME;
const uploadPreset = process.env.EXPO_PUBLIC_PRESET!;

const clientId = process.env.EXPO_PUBLIC_CLIENT_ID;

const CLOUDINARY_BASE_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

export const uploadImageToCloudinary = async (
  imageUri: string,
): Promise<UploadImageResponse | null> => {
  const fileName = imageUri.split("/").pop() ?? `image-${Date.now()}.jpg`;
  const formData = new FormData() as any;

  formData.append("file", {
    uri: imageUri,
    type: "image/jpeg",
    name: fileName,
  });

  formData.append("upload_preset", uploadPreset);
  formData.append("public_id", `products/${clientId}-${Date.now()}`);

  try {
    const response = await axios.post<UploadImageResponse>(
      CLOUDINARY_BASE_URL,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  } catch (error) {
    console.log("ERROR AL SUBIR IMAGEN: ", error);
    return null;
  }
};
