import React, { Component, useState } from "react";

import { render } from "react-dom";
import "../../../styles/create_publication/publication.css";
import axios from "axios";

export const NewPublication = (props) => {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
    axios
      .post("", fd, {
        onUploadProgress: (progressEvent) => {
          console.log(
            "Upload Progress: " +
              Math.round(progressEvent.loaded / progressEvent.total) * 100
          ) + "%";
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  render();
  return (
    <div className=" NewPublication">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={this.fileChangedHandler}
        ref={(fileInput) => (this.fileInput = fileInput)}
      />
      <button onClick={() => this.fileInput.click()}>Pick File</button>
      <button onClick={this.uploadHandler}>Upload!</button>
    </div>
  );
};
export default NewPublication;
