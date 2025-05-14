import { MenuHorizontal } from './components/menuHorizontal/MenuHorizontal';

export const App = () => {
	return (
		<>
			{/* <h2>App</h2>
			<MenuVertical
				items={[
					{ text: 'inicio', to: '/options', icon: 'home' },
					{ text: 'Usuarios', to: '/options/user', icon: 'user' },
				]}
			/> */}

			<MenuHorizontal
				items={[
					{ text: 'inicio', to: '/options' },
					{
						text: 'Usuarios',
						to: '/options/user',
						sub: [{ text: 'Usuarios', to: '/options/user' }],
					},
				]}
			/>
		</>
	);
};
