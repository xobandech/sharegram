"use client";
import { FormEvent, useContext, useState } from "react";
import { createPost } from "./ServerFunctions";
import { UserContext } from "@/contexts/UserContextProvider";

const AddPostButton = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    postText: "",
    postImageUrl: "",
  });
  const { currentUser } = useContext(UserContext)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createPost(formData.postImageUrl, formData.postText, currentUser);
    setIsPopupOpen(false);
    setFormData({
      postText: "",
      postImageUrl: "",
    });
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  if(!currentUser) return <p>Login to Add post</p>
  return (
    <>
      <button onClick={openPopup}>Add Post</button>
      { isPopupOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label htmlFor="imageUrl">
              Put an image to your post (optional)
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.postImageUrl}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  postImageUrl: e.target.value,
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
              value={formData.postText}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  postText: e.target.value,
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
