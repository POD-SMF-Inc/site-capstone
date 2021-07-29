import axios from "axios"

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
    this.token = null
    this.tokenName = "recipe-book-token"
  }

  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }

  async request({ endpoint, method = `GET`, data = {} }) {
    const url = `${this.remoteHostUrl}/${endpoint}`

    const headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? `Bearer ${this.token}` : "",
    }

    try {
      const res = await axios({ url, method, data, headers })
      return { data: res.data, error: null }
    } catch (error) {
      console.error("APIclient.makeRequest.error:")
      console.error({ errorResponse: error.response })
      const message = error?.response?.data?.error?.message
      return { data: null, error: message || String(error) }
    }
  }

  async addToFav(info)
  {
    return await this.request({ endpoint: `favorites/add`, method: `POST`, data: info })
  }

  async removeFromFav(info)
  {
    return await this.request({ endpoint: `favorites/remove`, method: `DELETE`, data: info })
  }

  async getFavs()
  {
    return await this.request({ endpoint: `favorites`, method: `GET` })
  }

  async checkFav(info)
  {
    return await this.request({ endpoint: `favorites/check`, method: `GET`, data: info })
  }

  
  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`})
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
  }

  async logoutUser() {
    this.setToken(null)
    localStorage.setItem(this.tokenName, "")
  }


async fetchUserSurvey() {
  return await this.request({ endpoint: `survey`, method: `GET`})
}

async surveyInfo(survey) {
  return await this.request({ endpoint: `survey/survey`, method: `POST`, data: survey })
}

}

const API = new ApiClient(process.env.REACT_APP_REMOTE_HOST_URL || "http://localhost:3001")

export default API