import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {
	doc = document

	setFilterValue = event => {
		let value = event.currentTarget.value.toUpperCase()
		this.props.setFilterToState(value)
		this.doc.getElementById('buttonClear').classList.remove('buttonClearID')
	}

	inputFieldInFront = () => {
		// console.log(document.getElementById('findContacts').current)
		this.doc.getElementById('findContacts').value = ''
		this.props.setFilterToState('')

		this.doc.getElementById('buttonClear').classList.add('buttonClearID')
	}

	render() {
		return (
			<div>
				<h4>Find contacts by name</h4>
				<input
					id="findContacts"
					className="Contact"
					onChange={this.setFilterValue}></input>
				<button
					id="buttonClear"
					onClick={this.inputFieldInFront}
					className="buttonClear buttonClearID"
					type="button">
					Clear
				</button>
			</div>
		)
	}
}

Filter.propTypes = {
	setFilterToState: PropTypes.func.isRequired,
}
export default Filter
