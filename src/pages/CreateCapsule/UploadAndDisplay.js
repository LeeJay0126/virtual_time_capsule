import { useState } from "react";

const UploadAndDisplay = () => {
  const [selectedImage, setSelectedImage] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  const removeImageHandler = () => {
    setSelectedImage(selectedImage.pop());
    setImageCount((imageCount += 1));
  };

  // Return the JSX for rendering
  return (
    <div>
      {(imageCount > 0) ? selectedImage : selectedImage && (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage[imageCount - 1])}
          />
          <br /> <br />
          {/* Button to remove the selected image */}
          <button onClick={removeImageHandler}>Remove</button>
        </div>
      )}

      <br />

      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        className="uploadButton"
        // Event handler to capture file selection and update the state
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(selectedImage.push(event.target.files[0]));
          setImageCount((imageCount += 1));
          // Update the state with the selected file
        }}
      />
    </div>
  );
};

export default UploadAndDisplay;
