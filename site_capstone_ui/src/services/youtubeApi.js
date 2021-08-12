import axios from "axios";
import { YOUTUBE_API_KEY } from "../config"
class YoutubeCalls {
    constructor(apiUrl, apiKey)
    {
        this.apiUrl = apiUrl
        this.apiKey = apiKey
    }

    async request({ method = `GET`, data})
    {
        const url = `${this.apiUrl}&id=${data}&key=${this.apiKey}`
        console.log("youtubeUrl: ", url)
        const headers = {
            "Content-Type": "application/json"
        }
        try {
            const res = await axios({ url, method, data, headers })
            return { data: res.data, error: null }
        }
        catch (error)
        {
            console.error("APIclient.makeRequest.error:")
            console.error({ errorResponse: error.response })
            const message = error?.response?.data?.error?.message
            return { data: null, error: message || String(error) }
        }
        //url: https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics
    }
    //https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=ooAIaUOVJe4&key=AIzaSyDM9fN3sZbK7xYDHB9turTs4dFyJZ3lVnI

    async getYoutubeInfo(info)
    {
        return await this.request({method: `GET`, data: info})
    }
}

const youtubeAPI = new YoutubeCalls(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics`, YOUTUBE_API_KEY)
export default youtubeAPI