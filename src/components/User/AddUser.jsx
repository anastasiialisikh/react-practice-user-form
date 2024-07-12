import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const errMsg1 = 'Please enter a valid name and age (non-empty values).'
const errMsg2 = 'Please enter valid age (>0).'

function AddUser({ onAdd, onShowError }) {
	const [userName, setUserName] = useState('')
	const [userAge, setUserAge] = useState('')

	const userNameChangeHandler = (event) => {
		setUserName(event.target.value.trim())
	}

	const userAgeChangeHandler = (event) => {
		setUserAge(event.target.value)
	}

	const formSubmitHandler = (event) => {
		event.preventDefault()

		if (!userName || !userAge) { onShowError(errMsg1); return }
		if (+userAge <= 0) { onShowError(errMsg2); return }

		const newUser = {
			name: userName,
			age: userAge
		}
		onAdd(newUser)
		setUserName('')
		setUserAge('')
	}

	const buttonClickHandler = (event) => {
		setTimeout(() => {
			event.target.blur();
		}, 200);
	}

	return (
		<Card>
			<form onSubmit={formSubmitHandler}>
				<div className={classes.inputControl}>
					<label htmlFor='user-name'>Name</label>
					<input id='user-name'
						value={userName}
						onChange={userNameChangeHandler}
					/>
				</div>
				<div className={classes.inputControl}>
					<label htmlFor='user-age'>Age</label>
					<input id='user-age' type='number'
						value={userAge}
						onChange={userAgeChangeHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button type='submit' onClick={buttonClickHandler}>
						Add Person
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default AddUser