import React, { useState } from 'react'

function App() {

	const [inputData, setInputData] = useState({ firstName: "", lastName: "" })
	const [contactData, setContactsData] = useState([])

	function handleChange(event) {
		const { name, value } = event.target

		setInputData(prevInput => {
			return {
				...prevInput,
				[name]: value
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		setContactsData(prevContact => [
			 ...prevContact,
			  inputData
			])
	}

	const contacts = contactData.map(contact => <h2 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h2>)

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input placeholder="First Name" name="firstName" value={inputData.firstName} onChange={handleChange} />
				<input placeholder="Last Name" name="lastName" value={inputData.lastName} onChange={handleChange} />

				<br />
				<button>Add Contact</button>

			</form>
			{contacts}


		</>

	)

}

export default App