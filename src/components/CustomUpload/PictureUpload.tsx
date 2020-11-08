/*eslint-disable*/
import React, { useEffect, useState } from 'react';

import defaultImage from 'assets/img/default-avatar.png';

interface IPictureUploadProps {
  id: string;
  onChange: Function;
  image?: string;
}

const PictureUpload = ({ id, onChange, image }: IPictureUploadProps) => {
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(defaultImage);

  useEffect(() => {
    setImagePreviewUrl(prevState => image || prevState);
  }, [image]);

  useEffect(() => {
    onChange({ id, value: imagePreviewUrl });
  }, [imagePreviewUrl]);

  const handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const newFile = e.target.files[0];
    reader.onloadend = () => {
      setFile(newFile);
      setImagePreviewUrl(reader.result as string);
    };
    if (newFile) {
      reader.readAsDataURL(newFile);
    }
  };
  // eslint-disable-next-line
  const handleSubmit = e => {
    e.preventDefault();
    // this.state.file is the file/image uploaded
    // in this function you can save the image (this.state.file) on form submit
    // you have to call it yourself
  };

  return (
    <div className="picture-container">
      <div className="picture">
        <img src={imagePreviewUrl} className="picture-src" alt="..." />
        <input type="file" onChange={e => handleImageChange(e)} />
      </div>
      <h6 className="description">Choose Picture</h6>
    </div>
  );
};

export default PictureUpload;
