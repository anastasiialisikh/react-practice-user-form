import Card from './Card'
import Button from './Button'

import classes from './ErrorModal.module.css'

function ErrorModal({ onClose, errorMessage }) {
	return (
		<>
			<div className={classes.backdrop} onClick={onClose}></div>
			<dialog open className={classes.modal}>
				<Card className={classes.modalCard}>
					<h2 className={classes.title}>Invalid entered data</h2>
					<p>{errorMessage}</p>
					<div>
						<Button type='button' onClick={onClose}>Close</Button>
					</div>
				</Card>
			</dialog>
		</>
	)
}

export default ErrorModal