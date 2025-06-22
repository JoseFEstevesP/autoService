export const msg = {
	identifier: {
		minLength: 'Username must be at least 3 characters long',
		maxLength: 'Username cannot be longer than 20 characters',
		invalid: 'Username can only contain letters, numbers, and underscores',
		input: {
			label: 'Enter your username',
			placeHolder: 'Username',
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
			placeHolder: 'Password',
			iconName: 'password',
		},
	},
	page: {
		btn: 'Log in',
		register: 'Sign up',
		forgotPassword: 'Forgot your password?',
	},
};
