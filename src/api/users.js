const {setUsers, getUsers} = require('../data/users')

export default function handler(req, res){

	const file_location = __dirname + '..\\..\\src\\data\\users.json'

	let users = getUsers(file_location)

	res.setHeader("Access-Control-Allow-Origin", "*")

	if (req.method === 'GET'){
		return res.status(200).json(users)
	}
	else if (req.method === 'POST') {

		if (req.body.action == 'add'){
			users.push(req.body.user)
			setUsers(users, file_location)

			return res.status(201).json(
				{
					message: 'User added'
				}
			)
		}

		else if (req.body.action == 'delete'){
			users = users.filter(user => user.id != req.body.user.id)
			setUsers(users, file_location)

			return res.status(200).json(
				{
					message: 'User deleted'
				}
			)
		}

		else if (req.body.action == 'update'){
			users = users.map(user => {
				if (user.id == req.body.user.id){
					return req.body.user
				}
				return user
			})
			setUsers(users, file_location)

			return res.status(200).json(
				{
					message: 'User updated'
				}
			)
		}

		else if (req.body.action == 'search'){

			console.log(users)

			const results = users.filter(user => {
				return user.id === req.body.user.id
			})

			console.log(results)
			
			return res.status(200).json(results)
		}
	} else {
		return res.status(405)
		   .json({
			message: 'Method not allowed'
		})
	}

}