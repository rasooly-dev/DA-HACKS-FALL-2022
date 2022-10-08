const {setUsers, getUsers, reset} = require('../data/users')

//let users = []

export default function handler(req, res){

	let users = getUsers()
	console.log(__dirname)

	res.setHeader("Access-Control-Allow-Origin", "*")

	if (req.method === 'GET'){
		return res.status(200).json(users)
	}
	else if (req.method === 'POST') {

		if (req.body.action == 'add'){
			users.push(req.body.user)
			setUsers(users)
			
			/*
			console.log("###############################################")
			console.log("\nAdded" + req.body.user + " to users array")
			console.log("users array is: " + users)
			console.log("###############################################")
			*/

			return res.status(201).json(
				{
					message: 'User added'
				}
			)
		}

		else if (req.body.action == 'delete'){
			users = users.filter(user => user.id != req.body.user.id)
		setUsers(users)

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

		else if (req.body.action === 'reset') {
			reset()

			return res.status(200).json({
				message: 'Reset successful'
			})
		}
	} else {
		return res.status(405)
		   .json({
			message: 'Method not allowed'
		})
	}

}