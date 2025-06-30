export const msg = {
	identifier: {
		minLength: 'Username must be at least 3 characters long',
		maxLength: 'Username cannot be longer than 20 characters',
		invalid: 'Username can only contain letters, numbers, and underscores',
		input: {
			label: 'Enter your username',
			placeholder: 'Username',
			iconName: 'user',
		},
	},
	password: {
		minLength: 'Password must be at least 8 characters long',
		maxLength: 'Password cannot be longer than 20 characters',
		uppercase: 'Password must contain at least one uppercase letter',
		lowercase: 'Password must contain at least one lowercase letter',
		number: 'Password must contain at least one number',
		symbol: 'Password must contain at least one special symbol',
		input: {
			label: 'Password',
			placeholder: 'Password',
			iconName: 'password',
		},
	},
	email: {
		invalid: 'Invalid email address',
		input: {
			label: 'Email',
			placeholder: 'Email',
			iconName: 'email',
		},
	},
	username: {
		minLength: 'Username must be at least 3 characters long',
		maxLength: 'Username cannot be longer than 20 characters',
		invalid: 'Username can only contain letters, numbers, and underscores',
		input: {
			label: 'Username',
			placeholder: 'Username',
			iconName: 'user',
		},
	},
	name: {
		minLength: 'Name is required',
		maxLength: 'Name cannot be longer than 50 characters',
		input: {
			label: 'Name',
			placeholder: 'Name',
			iconName: 'user',
		},
	},
	dni: {
		minLength: 'DNI must be at least 8 characters long',
		maxLength: 'DNI must not exceed 12 characters',
		invalid: 'DNI can only contain numbers',
		input: {
			label: 'DNI',
			placeholder: 'DNI',
			iconName: 'dni',
		},
	},
	phone: {
		minLength: 'Phone number must be at least 10 digits long',
		maxLength: 'Phone number must not exceed 15 digits',
		invalid: 'Phone number can only contain numbers',
		input: {
			label: 'Phone Number',
			placeholder: 'Phone Number',
			iconName: 'phone',
		},
	},

	page: {
		btn: 'Log in',
		btnRegister: 'Register',
		register: 'Sign up',
		forgotPassword: 'Forgot your password?',
		btnRecovery: 'Recover your password',
		btnSubmit: 'Submit',
	},
};
