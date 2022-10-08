const fs = require('fs')
const courses = require('../data/courses.js').courses

export default function handler(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*")

	if (req.method === 'GET'){
		res.status(200).json(courses)
	}
	else if (req.method === 'POST') {
		const query = req.body.query

		// #all
		let results

		if (!(query === '#all')) { 
			const seen = {}

			results = courses.courses.filter((item) => {
				const result = item['course-name'].toLowerCase().includes(query.toLowerCase())
				if (result && !seen[item['course-id']]){
					seen[item['course-id']] = true
					return result
				}
			})
		}
		else {
			results = new Set()

			courses.courses.forEach((item) => {
				results.add(item['course-id'].split(' ')[0])
			})

			results = Array.from(results)
		}

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