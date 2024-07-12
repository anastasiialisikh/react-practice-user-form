import Card from '../UI/Card'
import classes from './UserList.module.css'

function UserList({ users }) {
	return (
		<Card>
			<ul className={classes.list}>
				{users.map(item => (
					<li key={item.name + Math.random()}>
						<span>{item.name}</span>
						<span>{item.age} years old</span>
					</li>
				))}
			</ul>
		</Card>
	)
}

export default UserList