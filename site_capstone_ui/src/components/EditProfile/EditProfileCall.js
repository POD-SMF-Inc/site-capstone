import EditProfile from "../EditProfile/EditProfile"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"
import "./EditProfile.css"


export default function EditProfileCall({ user, setUser, diet, description, intolerances, schoolname, cuisines, image, location, errors, setErrors, survey, setSurvey, setOpenModal, setIsUpdating})
{

  const form = {
    description: description,
    location: location,
    diet: diet,
    schoolname: schoolname,
    intolerances: intolerances,
    cuisines: cuisines,
    image: image
}

      const handleUpdateProfile = async () => {

        setIsUpdating(true)

        const { data, errors } = await apiClient.updateInfo(form)
        if (errors) setErrors(errors)
        if (data) {
          setSurvey(data.info)
        }
        setOpenModal(false)
        setIsUpdating(false)
        
      }
 
    return(
        <div className="button1">
             <button id="saveBtn2" className="button is-success  round-border is-info is-outlined  "  onClick={handleUpdateProfile}> Save </button>
        </div>
    )
}