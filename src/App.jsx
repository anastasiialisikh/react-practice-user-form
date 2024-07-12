import { useState } from 'react'

import AddUser from "./components/User/AddUser"
import UserList from "./components/User/UserList"
import ErrorModal from './components/UI/ErrorModal'

const initList = [
	{ name: 'Mini', age: 11 },
	{ name: 'Min', age: 21 },
	{ name: 'Max', age: 41 },
	{ name: 'Maxi', age: 51 },
]

function App() {
	const [userList, setUserList] = useState(initList)
	const [errorMessage, setErrorMessage] = useState('')

	const addUserHandler = (user) => {
		setUserList(curList => [user, ...curList])
	}

	const showErrorHandler = (message) => {
		setErrorMessage(message)
	}

	return (
		<>
			{errorMessage &&
				<ErrorModal onClose={setErrorMessage.bind(null, '')} errorMessage={errorMessage} />}
			<AddUser onAdd={addUserHandler} onShowError={showErrorHandler} />
			<UserList users={userList} />
		</>
	)
}

export default App
