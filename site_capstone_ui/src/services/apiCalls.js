import axios from "axios"

class ApiCalls {

    constructor(apiUrl, apiKey)
    {
        this.apiUrl = apiUrl
        this.apiKey = apiKey
    }

    async request({ endpoint, method = `GET`, data = {}, number }) {
        const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}`
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

    }

    async getRandomRecipe(){
        return await this.request({endpoint: `random`, method: `GET`, number: 10})
    }

    async getHomeRandomRecipe(){
        return await this.request({endpoint: `random`, method: `GET`, number: 6})
    }
}

const APIR = new ApiCalls(`https://api.spoonacular.com/recipes`, `19dd9d780e6a404383d126df3422985f`)

export default APIR