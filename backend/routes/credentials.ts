import express from 'express'
import {data} from '../defaultData.js'
import type { Credentials } from '../models.js'
const router = express.Router()

//jämför vad som skrivits in i user med vad som finns i databasen
//finns username och password i databasen så skickas det tillbaka ett resultat
function compareCredentials(user: Credentials) {
	if (data) {
		console.log("det här är db data", data.credentials)
		const result = data.credentials.find(credentials =>
			credentials.username === user.username && credentials.password === user.password);
		return result;
	} else {
		return false;
	}
}

//get funkar och hämtar användarna som finns i databasen
router.get('/', (req, res) => {
	if (data?.credentials) {
		res.send(data.credentials);
	} else {
		res.sendStatus(404);
	}
})

//tar state från login och skickar det vidare till compareCredentials
//om resultatet från compareCredentials finns så skickas det vidare till frontend 
router.post('/', (req, res) => {
	const user = req.body
	console.log('här är user', user)
	const result = compareCredentials(user)
	console.log('här är resultatet i .post', result)
	if (result !== false && user.hasOwnProperty('username') && user.hasOwnProperty('password')) {
		if (result) {
			res.send(result)
		} else {
			res.sendStatus(404)
		}
	}
})

export default router
