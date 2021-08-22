import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

class App extends React.Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
		name: '',
		number: '',
	}

	render() {
		return (
			<div className="phonebookBox">
				<p className="PhoneBook">PhoneBook</p>
				<div className="PhoneBookBlock">
					<div id={uuidv4()} className="inputText">
						<p>Name</p>
						<input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
							required
						/>
					</div>
					<div id={uuidv4()} className="inputText">
						<p>Nmaber</p>
						<input
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
							required
						/>
					</div>
					<div>
						<p className="addContact">Add contact</p>
					</div>
				</div>
				<div className="PhoneBookContacts">
					<h2>Contacts</h2>
					<p>Find contacts by name</p>
					<input
						type="Find"
						name="Find"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Поиск"
						required
					/>
					<ul>
						<li>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
						</li>
						<li>
							<p>
								. Eum porro veniam distinctio laudantium totam saepe explicabo
								assumenda officiis
							</p>
						</li>
						<li>
							<p>
								vero, vitae ipsam neque quasi deleniti reprehenderit quia
								reiciendis cum! Possimus, commodi!
							</p>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default App
