import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class CustomerAdd extends Component {
	render() {
		return (
			<form noValidate autoComplete="off">
				<TextField id="customer-name"
					label="Customer Name"
				/>
			</form>
		);
	}
}

export default CustomerAdd;
