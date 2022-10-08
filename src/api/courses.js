const fs = require('fs')
const courses = require('../data/courses.js').courses

export default function handler(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*")

	if (req.method === 'GET'){
		res.status(200).json(courses)
	}
	else if (req.method === 'POST') {
		const query = req.body.query

		const seen = {}

		const results = courses.courses.filter((item) => {
			const result = item['course-name'].toLowerCase().includes(query.toLowerCase())
			if (result && !seen[item['course-id']]){
				seen[item['course-id']] = true
				return result
			}
		})
		res.status(200).json({
			"results": results
		})
	} else {
		return res.status(405)
		   .json({
			message: 'Method not allowed'
		})
	}

	
}