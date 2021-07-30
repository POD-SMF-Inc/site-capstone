import EditProfile from "../EditProfile/EditProfile"
import {useState} from "react"
import apiClient from "../../services/apiClient"


export default function EditProfileCall({ diet, description, intolerances, schoolName, cuisines, location, setErrors, survey, setSurvey})
{
    const form = {
        description: description,
        location: location,
        diet: diet,
        schoolName: schoolName,
        intolerances: intolerances,
        cuisines: cuisines
    }

    const handleUpdateProfile = async () => {

        const { data, errors } = await apiClient.updateInfo(form)
        if (errors) setErrors(errors)
        if (data) {
          setSurvey(data.info)
        }
        
      }
 
    return(
        <div className="EditProfileCall">
             <button type="submit" onClick={handleUpdateProfile}> Save </button>
        </div>
    )
}