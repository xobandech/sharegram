"use client";
import { FormEvent, useState } from "react";
import { handleAddPost } from "./ServerFunctions";

const AddPostButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    imageUrl: "",
    textToShare: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddPost(formData);
    setIsPopupOpen(false);
    setFormData({
      imageUrl: "",
      textToShare: "",
    });
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <button onClick={openPopup}>Add Post</button>
      {isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="imageUrl">
              Put an image to your post (optional)
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  imageUrl: e.target.value,
                });
                console.log(formData);
                
              }}
            />
            <label htmlFor="textToShare">
              Put some text
            </label>
            <input
              required
              type="text"
              name="textToShare"
              value={formData.textToShare}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  textToShare: e.target.value,
                });
                console.log(formData);
                
              }}
            />
            <button type="submit">Share!</button>
            <button onClick={closePopup}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
};

export default AddPostButton;
