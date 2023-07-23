"use client";
import { FormEvent, useContext, useState, useRef } from "react";
import { createPost } from "./ServerFunctions";
import { UserContext } from "@/contexts/UserContextProvider";

const AddPostButton = () => {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#1F2937",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    padding: "0.625rem",  
    marginRight: "0.5rem",
    marginBottom: "0.5rem",
    fontFamily: "inherit",
    width: "40%",
    marginTop: "0.625rem",
  };

  const [formData, setFormData] = useState({
    postText: "",
    postImageUrl: "",
  });
  const { currentUser } = useContext(UserContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createPost(formData.postImageUrl, formData.postText, currentUser);
    setFormData({
      postText: "",
      postImageUrl: "",
    });
    dialogRef.current?.close();
  };

  const openPopup = () => {
    dialogRef.current?.showModal();
  };

  const closePopup = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <button onClick={openPopup}>Add Post</button>
      <dialog ref={dialogRef}>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="imageUrl">Put an image to your post (optional)</label>
          <input
            style={{ border: "solid", borderWidth: "1px" }}
            type="text"
            name="imageUrl"
            value={formData.postImageUrl}
            onChange={(e) => {
              setFormData({
                ...formData,
                postImageUrl: e.target.value,
              });
            }}
          />
          <label htmlFor="textToShare">Put some text</label>
          <input
            style={{ border: "solid", borderWidth: "1px" }}
            required
            type="text"
            name="textToShare"
            value={formData.postText}
            onChange={(e) => {
              setFormData({
                ...formData,
                postText: e.target.value,
              });
            }}
          />
          <div className="flex justify-center">
            <button type="submit" style={buttonStyle}>
              Post
            </button>
          </div>
        </form>
        <button
          className="text-xl p-10 rounded-2xl"
          onClick={closePopup}
          style={{
            border: "solid",
            borderWidth: "2px",
            borderRadius: "5px",
            borderColor: "black",
          }}
        >
          Cancel
        </button>
      </dialog>
    </>
  );
};

export default AddPostButton;
