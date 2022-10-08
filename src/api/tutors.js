const fs = require('fs')
const tutors = require('../data/tutors.js').tutors

export default function handler(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*")

	// ALL TUTORS
	if (req.method === 'GET'){
		res.status(200).json(tutors)
	}
	
	else if (req.method === 'POST'){
		// SEARCH NAME
		if (req.body.action === 'search-name'){
			const query = req.body.query
			const results = tutors.filter((item) => {
				const result = item['name'].toLowerCase().includes(query.toLowerCase())
				if (result){
					return result
				}
			})
			res.status(200).json({
				"results": results
			})
		}
		// SEARCH ID
		else if (req.body.action === 'search-id'){
			const results = tutors.filter(item => {
				const result = item["id"] === req.body.tutor['id']
				if (result){
					return result
				}
			})
			return res.status(200).json(results)
		}
		// SEARCH SUBJECT
		else if (req.body.action === 'search-subject'){
			const results = tutors.filter(item => {
				const result = item["subjects"].includes(req.body.query)
				if (result){
					return result
				}
			})
			return res.status(200).json(results)
		}
	}
}