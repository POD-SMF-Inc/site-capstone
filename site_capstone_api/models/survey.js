const db = require("../db")
const {BadRequestError, NotFoundError} = require("../utils/errors")

class Survey {

    static async surveyForm(profile) 
    {
        return {
            id: profile.id,
            user_id: profile.user_id,
            diet: profile.diet,
            intolerances: profile.intolerances,
            cuisines: profile.cuisines,
            description: profile.description,
            location: profile.location,
            profileImage: profile.image,
            schoolName: profile.schoolName
    }
}

static async fetchSurvey ({ user }) {
    //returns survey form
    const query = `SELECT profile.id,
    profile.diet,
    profile.intolerances,
    profile.cuisines,
    profile.description,
    profile.location,
    profile.image,
    profile.schoolName
    FROM profile 
    JOIN users ON profile.user_id = users.id
    WHERE users.username = $1`
    const result = await db.query(query, [user.username])
    /*
    const results = await db.query (
    const query =
        `
        SELECT profile.id,
        profile.diet,
        profile.intolerances,
        profile.cuisines,
        profile.description,
        profile.location,
        profile.image,
        profile.schoolName
        FROM profile
        JOIN users ON profile.user_id = users.id
        WHERE users.username = $1
        `
    ) 
        */
    const profileInfo = result.rows
    return profileInfo
}

    static async insertInfo({ profile, user }) {
         // takes user's answers and puts it in profile

 
             const surveyResult = await db.query (
     `
     INSERT INTO profile (diet, intolerances, cuisines, description, location, image, schoolName, user_id)
     VALUES ($1,$2,$3,$4,$5,$6,$7,(SELECT id FROM users WHERE username = $8))
     RETURNING id, 
     diet, 
     intolerances, 
     cuisines, 
     description, 
     location, 
     image, 
     schoolName, 
     user_id
     `, [profile.diet, profile.intolerances, profile.cuisines, profile.description, profile.location, profile.image, profile.schoolName,user.username]
     )
         
     const result = surveyResult.rows[0]
     return Survey.surveyForm(result)

    }

    static async updateInfo ({ infoUpdate, infoId }) {

        let temporaryTable = {} ;
        for (const element in infoUpdate) {
            console.log(element,infoUpdate[element])
        const results = await db.query (
                `
                UPDATE profile
                SET ${element} = $1
                WHERE id = $2

            RETURNING id, 
            diet, 
            intolerances, 
            cuisines, 
            description, 
            location, 
            image, 
            schoolName, 
            user_id
            `, [infoUpdate[element],infoId]
            )

            temporaryTable = results.rows[0]
           
        }

        return temporaryTable
  
    }


}

module.exports = Survey