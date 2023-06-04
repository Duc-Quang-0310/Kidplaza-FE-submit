import { message } from "antd";
import { useCallback, useState } from "react";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const useImageUpload = () => {
  const [imgLoading, setImgLoading] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const beforeUpload = useCallback((file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 100;
    if (!isLt2M) {
      message.error("Image must smaller than 100MB!");
    }
    return isJpgOrPng && isLt2M;
  }, []);

  const handleChangeImage: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    setImgLoading(true);

    const img = await getBase64(info.file.originFileObj as RcFile);

    setTimeout(() => {
      setImgLoading(false);
      setImgUrl(img);
    }, 500);
  };

  return {
    beforeUpload,
    handleChangeImage,
    imgUrl,
    imgLoading,
  };
};
