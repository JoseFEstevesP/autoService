export const msg = {
	identifier: {
		minLength: 'El nombre de usuario debe tener al menos 3 caracteres',
		maxLength: 'El nombre de usuario no puede tener más de 20 caracteres',
		invalid:
			'El nombre de usuario solo puede contener letras, números y guiones bajos',
		input: {
			label: 'Ingrese su usuario',
			placeHolder: 'Usuario',
			iconName: 'user',
		},
	},
	password: {
		minLength: 'La contraseña debe tener al menos 8 caracteres',
		maxLength: 'La contraseña no puede tener más de 20 caracteres',
		uppercase: 'La contraseña debe contener al menos una letra mayúscula',
		lowercase: 'La contraseña debe contener al menos una letra minúscula',
		number: 'La contraseña debe contener al menos un número',
		symbol: 'La contraseña debe contener al menos un símbolo especial',
		input: {
			label: 'Contraseña',
			placeHolder: 'Contraseña',
			iconName: 'password',
		},
	},

	page: {
		btn: 'Iniciar sesión',
		register: 'Registrarse',
		forgotPassword: '¿Olvidaste tu contraseña?',
	},
};
