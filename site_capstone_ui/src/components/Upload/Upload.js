import React from 'react';
import './Upload.css';
import Profile from "../Profile/Profile"

class Upload extends React.Component{
  state = {
    imageUrl: null,
    imageAlt: null,
  }

  handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]')
    const formData = new FormData();
    formData.append('file', files[0]);
// replace this with your upload preset name
    formData.append('upload_preset', 'upload');
    const options = {
        method: 'POST',
        body: formData,
};

// replace cloudname with your Cloudinary cloud_name
return fetch('https://api.Cloudinary.com/v1_1/df16thior/image/upload', options)
.then(res => res.json())
.then(res => {
this.setState({
  imageUrl: res.secure_url,
  imageAlt: `An image of ${res.original_filename}`
})
})
.catch(err => console.log(err));
  }

  openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'df16thior',
        uploadPreset: 'upload',
      },
      (error, result) => {
        if (result.event === 'success') {
          this.setState({
            imageUrl: result.info.secure_url,
            imageAlt: `An image of ${result.info.original_filename}`
          })
        }
      },
    );
    widget.open(); // open up the widget after creation
  };


  render() {
    const { imageUrl, imageAlt } = this.state;

    
    return (
      <main className="Upload">
        <section className="left-side">
          <form>
            <div className="form-group">
              <input type="file"/>
            </div>

            <button type="button" className="btn" onClick={this.handleImageUpload}>Submit</button>
            <button type="button" className="btn widget-btn" onClick={this.openWidget}>Upload Via Widget</button>
          </form>
        </section>
        <section className="right-side">
          <p>The resulting image will be displayed here</p>
          {imageUrl && (
            <img src={imageUrl} alt={imageAlt} className="displayed-image"/>
          )}
        </section>
      </main>
    );
  }
}

export default Upload;