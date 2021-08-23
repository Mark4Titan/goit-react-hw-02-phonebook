import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import './App.css'

const INITIAL_STATE = {
	login: '',
	email: '',
	password: '',
}

class App extends React.Component {
	state = { ...INITIAL_STATE }

	handleChange = ({ target }) => {
		const { name, value } = target

		this.setState({ [name]: value })
	}

	handleSubmit = evt => {
		evt.preventDefault()

		const { login, email, password } = this.state

		console.log(`
      Login: ${login}
      Email: ${email}
      Password: ${password}
    `)

		this.props.onSubmit({ ...this.state })
		this.reset()
	}

	reset = () => {
		this.setState({ ...INITIAL_STATE })
	}

	render() {
		const { login, email, password } = this.state

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name
						<input
							type="text"
							placeholder="Enter login"
							name="login"
							value={login}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Email
						<input
							type="email"
							placeholder="Enter email"
							name="email"
							value={email}
							onChange={this.handleChange}
						/>
					</label>
					<label>
						Password
						<input
							type="password"
							placeholder="Enter password"
							name="password"
							value={password}
							onChange={this.handleChange}
						/>
					</label>

					<button type="submit">Sign up as {login}</button>
				</form>
			</div>
		)
	}

	// state = {
	// 	contacts: [
	// 		// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	// 		// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	// 		// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	// 		// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
	// 	],
	// 	filter: '',
	// 	name: '',
	// 	number: '',
	// }
	// handleChange = ({ target }) => {
	// 	const { name, value } = target
	// 	this.setState({ [name]: value })
	// }
	// handleSubmit = evt => {
	// 	evt.preventDefault()
	// 	const { contacts, name, number } = this.state
	// 	console.log(`
	//   contacts: ${contacts}
	//   number: ${number}
	// `)
	// 	this.props.onSubmit({ ...this.state })
	// 	this.reset()
	// }
	// render() {
	// 	const { contacts, name, number, filter } = this.state
	// 	return (
	// 		<div className="PhoneBookBlock">
	// 			<form onSubmit={this.handleSubmit} className="phonebookBox">
	// 				<label className="PhoneBook">
	// 					<p>PhoneBook</p>
	// 					<div id={uuidv4()} className="inputText">
	// 						<p>Name</p>
	// 						<input
	// 							type="text"
	// 							name="contacts"
	// 							placeholder="Enter name"
	// 							value={contacts}
	// 							onChange={this.handleChange}
	// 							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
	// 							title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
	// 							required
	// 						/>
	// 					</div>
	// 				</label>
	// 				{/* <div id={uuidv4()} className="inputText">
	// 					<p>Nmaber</p>
	// 					<input
	// 						type="tel"
	// 						name="number"
	// 						placeholder="Enter number"
	// 						value={number}
	// 						onChange={this.handleChange}
	// 						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
	// 						title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
	// 						required
	// 					/>
	// 				</div> */}
	// 				<div>
	// 					<button className="addContact" type="submit">
	// 						Add contact {contacts}
	// 					</button>
	// 				</div>
	// 			</form>
	// 			{/* <div className="PhoneBookContacts">
	// 				<h2>Contacts</h2>
	// 				<p>Find contacts by name</p>
	// 				<input
	// 					type="Find"
	// 					name="Find"
	// 					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
	// 					title="Поиск"
	// 					required
	// 				/>
	// 				<ul>
	// 					<li>
	// 						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
	// 					</li>
	// 				</ul>
	// 			</div> */}
	// 		</div>
	// 	)
	// }
}

export default App
