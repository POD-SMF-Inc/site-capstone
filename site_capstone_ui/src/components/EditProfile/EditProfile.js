import "./EditProfile.css";
import "../Profile/Profile";
import EditProfileCall from "./EditProfileCall";
//import { ThemeContext } from "../../contexts/ThemeContext"
import React, { useState, useCallback, useRef, useEffect, useContext } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function EditProfile({
  survey,
  setSurvey,
  errors,
  setErrors,
  setOpenModal,
}) {
  const context = useContext(ThemeContext);
  //const theme = context.isLightTheme ? context.light : context.dark;
  const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  const [isUpdating, setIsUpdating] = useState(false);

  const [description, setDescription] = useState(survey.description);
  const [location, setLocation] = useState(survey.location);
  const [diet, setDiet] = useState(survey.diet);
  const [schoolname, setSchoolName] = useState(survey.schoolname);
  const [intolerances, setIntolerances] = useState(survey.intolerances);
  const [cuisines, setCuisines] = useState(survey.cuisines);
  const [image, setImage] = useState(survey.image);

  const [imageUrl, setImageUrl] = useState(null);
  const [imageAlt, setImageAlt] = useState(null);

  const handleImageUpload = () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    // replace this with your upload preset name
    formData.append("upload_preset", "upload");
    const options = {
      method: "POST",
      body: formData,
    };

    // replace cloudname with your Cloudinary cloud_name
    return fetch(
      "https://api.Cloudinary.com/v1_1/df16thior/image/upload",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.secure_url);
        setImageAlt(`An image of ${res.original_filename}`);
        //setOpenModalTwo(true)
      })
      .catch((err) => console.log(err));
  };

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "df16thior",
        uploadPreset: "upload",
      },
      (error, result) => {
        if (result.event === "success") {
          setImageUrl(result.info.secure_url);
          setImageAlt(`An image of ${result.info.original_filename}`);
        }
      }
    );
    widget.open(); // open up the widget after creation
  };

  return (
    <div className="modalContainer ">
      <div className={`modal-card `} >
        <header
          className={`has-background-primary has-text-white modal-card-head  `}
        >
          <p id= "titles" className={`modal-card-title  has-text-white `}> Profile Information </p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              setOpenModal(false);
            }}
          ></button>
        </header>

        <section className={`modal-card-body ${theme2}`}>
          <main className={`Upload `}>
            <section className={`left-side ${theme2} `}>
              <h1 id="current" className={` ${theme2} `}> Current Profile Photo: </h1>
              <div className="profile-img">
                <img src={image} alt="No Profile Photo Available" id="noimage"></img>
              </div>
                <label id ="new" className={`label  ${theme2} `} align="left" htmlFor="description">
                Updated Profile Photo:
              </label>
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="displayed-image"
                />
              )}

<form className={` ${theme2}`}>
                <div className={`form-group ${theme2}`}>
                  <h1> Change Profile Photo </h1>
                  <input id="btn2"type="file" />
                </div>
                <button
                  type="button"
                  id="btn"
                  className="btn"
                  onClick={handleImageUpload}
                >
                  Upload
                </button>
                <button
                  type="button"
                  id = "btn"
                  className="btn widget-btn"
                  onClick={openWidget}
                >
                  Upload Via Widget
                </button>
                </form>

            </section>
          </main>
          

          <div className={`field ${theme2}`}>
            <div className="control">
              <label className={`label ${theme2}`} align="left" htmlFor="description">
                {" "}
                About Me:{" "}
              </label>
              <input
                className="input"
                type="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label align="left" className={`label ${theme2}`} htmlFor="location">
              Location:
            </label>
            <div className="control">
              <input
                className="input"
                type="location"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label align="left" className={`label ${theme2}`} htmlFor="diet">
              Diet:
            </label>
            <div className="control">
              <input
                className="input"
                type="diet"
                name="diet"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label align="left" className={`label ${theme2}`} htmlFor="schoolName">
              School:
            </label>
            <div className="control">
              <input
                className="input"
                type="schoolname"
                name="schoolname"
                value={schoolname}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label align="left" className={`label ${theme2}`} htmlFor="intolerances">
              Food Intolerances:
            </label>
            <div className="control">
              <input
                className="input"
                type="intolerances"
                name="intolerances"
                value={intolerances}
                onChange={(e) => setIntolerances(e.target.value)}
              />
            </div>
          </div>

          <div className="field ">
            <label align="left" className={`label ${theme2}`} htmlFor="cuisines">
              Preferred Cuisines:
            </label>
            <div className="control">
              <input
                className="input "
                type="cuisines"
                name="cuisines"
                value={cuisines}
                onChange={(e) => setCuisines(e.target.value)}
              />
            </div>
          </div>

          <footer
            className={`modal-card-foot  has-background-white ${theme2}`}
            style={{ justifyContent: "center" }}
          >
            <EditProfileCall
              diet={diet}
              description={description}
              intolerances={intolerances}
              schoolname={schoolname}
              cuisines={cuisines}
              location={location}
              image={imageUrl}
              setErrors={setErrors}
              survey={survey}
              setSurvey={setSurvey}
              setOpenModal={setOpenModal}
              setIsUpdating={setIsUpdating}
            />
            <button
              id="icon"
              className="button  round-border   is-outlined is-danger is-bold "
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              {" "}
              Cancel{" "}
            </button>
          </footer>
        </section>
      </div>
    </div>
  );
}
