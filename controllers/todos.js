var Model = require('../models')

const todos = {
    
	getAllTodos: async (req, res) => {
		let todos = []
		try {
				todos = await Model.Todos.findAll()
					
		} catch(e) {
				console.log(e)
		}

		res.json(todos)
	},

	createTodo: async (req, res) => {
		let todo = {}

		try {
			
			todo = await Model.Todos.create({
				title: req.body.title,
				description: req.body.description
			})

		} catch(e) {
			console.log(e)
		}

		res.json(todo)
	}
}
module.exports = todos