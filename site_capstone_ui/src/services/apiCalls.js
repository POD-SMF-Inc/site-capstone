import axios from "axios"
const { API_KEY_RECIPE } = require("../config")
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

    async requestEquipment({ endpoint, method = `GET`, data = {} }) {
        const url = `https://api.spoonacular.com/recipes/${data}/${endpoint}?apiKey=${this.apiKey}`
        //`https://api.spoonacular.com/recipes/{id}/equipmentWidget.json`
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

    async requestInfo({ endpoint, method = `GET`, data })
    {
        const url = `${this.apiUrl}/${data}/${endpoint}?apiKey=${this.apiKey}`
        
        const headers = {
            "Content-Type": "application/json"
        }
        console.log("info url: ", url)
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

    async requestIngredients({ endpoint, method = `GET`, data, number })
    {
        const headers = {
            "Content-Type": "application/json"
        }    
        const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}&ingredients=${data.join(",+")}`
        
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


    async requestSearch({ endpoint, method = `GET`, data, number })
    {

        console.log("data: ", data)
        const headers = {
            "Content-Type": "application/json"
        }
        const cuisine = data.choices.cuisine //cuisine => []
        let diet = data.choices.diet //diet => ""
        let meal_type = data.choices.meal_type //String => ""
        const query = data.choices.query //String => ""
        const intolerances = data.choices.intolerances

        console.log("in: ", intolerances)

        if (diet === "")
        {
            console.log("yesD")
            diet = "Select"
        }

        if (meal_type === "")
        {
            console.log("yesC")
            meal_type = "Select"
        }
        console.log("diet: ", diet)
        console.log("meal type: ", meal_type)

        const cuisineSec = `&cuisine=${cuisine.join(",+")}`
        const dietSec = `&diet=${diet}`
        const typeSec = `&type=${meal_type}`
        const querySec = `&query=${query}`
        const intolSec = `&intolerances=${intolerances.join(",+")}`


        
        //If one of the choices aren't used
        if (meal_type === "Select" || diet === "Select" || cuisine.length === 0 || query === "" || intolerances.length === 0)
        {
            console.log("yes")
            if (meal_type === "Select" && diet === "Select" && cuisine.length === 0 && query === "" && intolerances.length === 0)
            {
                //User chooses nothing
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}`
                console.log("emptyUrl: ", url)

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

            if (meal_type === "Select" && diet === "Select" && cuisine.length === 0 && query !== "" && intolerances.length === 0)
            {
                //User only writes a query
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}`
                console.log("queryUrl: ", url)
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

            if (meal_type === "Select" && diet === "Select" && cuisine.length === 0 && query === "" && intolerances.length !== 0)
            {
                //User only chooses intolerances
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${intolSec}`
                console.log("intolUrl: ", url)
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

            if (meal_type === "Select" && diet === "Select" && query === "" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses a cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}`
                console.log("cuisineUrl: ", url)
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

            if (meal_type === "Select" && cuisine.length === 0 && query === "" && diet !== "Select" && intolerances.length === 0)
            {
                //User only chooses a diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${dietSec}`
                console.log("dietUrl: ", url)
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

            if (diet === "Select" && cuisine.length === 0 && query === "" && meal_type !== "Select" && intolerances.length === 0)
            {
                //User only chooses a mealType
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}`
                console.log("typeUrl: ", url)
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

            if(diet === "Select" && cuisine.length === 0 && query !== "" && meal_type !== "Select" && intolerances.length === 0)
            {
                //User only chooses query and type
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${querySec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && cuisine.length === 0 && query !== "" && diet !== "Select" && intolerances.length === 0)
            {
                //User only chooses query and diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${dietSec}${querySec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet === "Select" && query !== "" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses query and cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${querySec}`
                console.log("CraftedUrl: ", url)
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

            if(cuisine.length === 0 && query === "" && diet !== "Select" && meal_type !== "Select" && intolerances.length === 0)
            {
                //User only chooses type and diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(diet === "Select" && query === "" && cuisine.length !== 0 && meal_type !== "Select" && intolerances.length === 0)
            {
                //User only chooses type and cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${cuisineSec}`
                console.log("CraftedUrl: ", url)
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

            if(query === "" && meal_type === "Select" && cuisine.length !== 0 && diet !== "Select" && intolerances.length === 0)
            {
                //User only chooses diet and cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${dietSec}${cuisineSec}`
                console.log("CraftedUrl: ", url)
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

            if(query === "" && meal_type !== "Select" && cuisine.length === 0 && diet === "Select" && intolerances.length !== 0)
            {
                //User only chooses type and intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(query === "" && meal_type === "Select" && cuisine.length !== 0 && diet === "Select" && intolerances.length !== 0)
            {
                //User only chooses cuisine and intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(query === "" && meal_type === "Select" && cuisine.length === 0 && diet !== "Select" && intolerances.length !== 0)
            {
                //User only chooses diet and intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${dietSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(query !== "" && meal_type === "Select" && cuisine.length === 0 && diet === "Select" && intolerances.length !== 0)
            {
                //User only chooses query and intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(cuisine.length === 0 && diet !== "Select" && meal_type !== "Select" && query !== "" && intolerances.length === 0)
            {
                //User only chooses query, type, diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${querySec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(diet === "Select" && meal_type !== "Select" && query !== "" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses query, type, cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${querySec}${cuisineSec}`
                console.log("CraftedUrl: ", url)
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

            if(query === "" && diet !== "Select" && meal_type !== "Select" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses diet, type, cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${typeSec}${dietSec}${cuisineSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet !== "Select" && query !== "" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses diet, query, cuisine
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${querySec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet === "Select" && query === "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses type, cuisine, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${typeSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet !== "Select" && query === "" && cuisine.length === 0 && intolerances.length !== 0)
            {
                //User only chooses type, diet, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${dietSec}${typeSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet === "Select" && query !== "" && cuisine.length === 0 && intolerances.length !== 0)
            {
                //User only chooses type, query, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}${typeSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet !== "Select" && query === "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses diet, cuisine, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${dietSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet === "Select" && query !== "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses query, cuisine, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${querySec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet !== "Select" && query !== "" && cuisine.length === 0 && intolerances.length !== 0)
            {
                //User only chooses diet, query, intolerance
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}${dietSec}${intolSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet !== "Select" && query === "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses type, cuisine, intolerance, diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${typeSec}${intolSec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet !== "Select" && query !== "" && cuisine.length !== 0 && intolerances.length === 0)
            {
                //User only chooses type, cuisine, query, diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${typeSec}${querySec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type !== "Select" && diet !== "Select" && query !== "" && cuisine.length === 0 && intolerances.length !== 0)
            {
                //User only chooses type, query, intolerance, diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}${typeSec}${intolSec}${dietSec}`
                console.log("CraftedUrl: ", url)
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

            if(meal_type === "Select" && diet !== "Select" && query !== "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses query, cuisine, intolerance, diet
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${querySec}${intolSec}${dietSec}`
                console.log("CraftedUrl: ", url)
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
            
            if(meal_type !== "Select" && diet === "Select" && query !== "" && cuisine.length !== 0 && intolerances.length !== 0)
            {
                //User only chooses query, cuisine, intolerance, type
                const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${cuisineSec}${querySec}${intolSec}${typeSec}`
                console.log("CraftedUrl: ", url)
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
            
        }
        else
        {
            //If they choose a meal type, query, cusine, intolerances and diet
            //console.log("no")
            const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}${querySec}${cuisineSec}${dietSec}${typeSec}${intolSec}`
            console.log("new: ", url)
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

        /*
        if (meal_type === "Select")
        {
            console.log("yep")
        }
        console.log("Data in api: ", data)
        console.log("cusine: ", cuisine)
        console.log("diet: ", diet)
        console.log("meal_type: ", meal_type)
        console.log("query: ", query)
        */
        //

        /*
        if (data === "" || data === null || data === undefined)
        {
            const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}`
            try {
                const res = await axios({ url, method, headers })
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
        else
        {
            console.log()
            const url = `${this.apiUrl}/${endpoint}?apiKey=${this.apiKey}&number=${number}&query=${data}`
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
        */
    }

    async requestVideos({ endpoint, method = `GET`, data = {}, number }) {
        console.log("data in video: ", data)
        const url = `https://api.spoonacular.com/food/videos/${endpoint}?apiKey=${this.apiKey}&number=${number}&query=${data}`
        console.log("video url: ", url)
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

    async getVideo(query)
    {
        //https://api.spoonacular.com/recipes/complexSearch
        //https://api.spoonacular.com/food/videos/searchs

        return await this.requestVideos({endpoint: `search`, method: `GET`, data: query, number: 3})
    }

    async getEquipment(info)
    {
        return await this.requestEquipment({endpoint: `equipmentWidget.json`, method: `GET`, data: info})
    }

    
    async getSearchRecipe(query)
    {
        return await this.requestSearch({endpoint: `complexSearch`, method: `GET`, data: query, number: 3})
    }

    async getIngredientRecipe(ingredients)
    {
        return await this.requestIngredients({endpoint: `findByIngredients`, method: `GET`, data: ingredients, number: 3})
    }


    async getRandomRecipe(){
        return await this.request({endpoint: `random`, method: `GET`, number: 10})
    }

    async getHomeRandomRecipe(){
        return await this.request({endpoint: `random`, method: `GET`, number: 6})
    }

    async getRecipeInfo(id)
    {
        return await this.requestInfo({endpoint: `information`, method: `GET`, data: id})
    }
}

const APIR = new ApiCalls(`https://api.spoonacular.com/recipes`, API_KEY_RECIPE)



export default APIR