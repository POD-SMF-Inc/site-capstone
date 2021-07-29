
import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
export default function ProfilePage()
{
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await apiClient.fetchUserSurvey()
                console.log(data)
            }
            catch (error)
            {
                console.log(error)
            }
        }
        fetchProfile()
    }, [])
    return (
        <div className="profilePage">
            <h1>in profile page</h1>
        </div>
    )
}