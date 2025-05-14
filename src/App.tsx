import InitBar from './components/initBar/InitBar';

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
			<InitBar
				items={[
					{ text: 'inicio', to: '/options' },
					{
						text: 'Usuarios',
						to: '/options/user',
						sub: [{ text: 'Usuarios', to: '/options/user' }],
					},
				]}
			/>
			{/* <MenuHorizontal
				items={[
					{ text: 'inicio', to: '/options' },
					{
						text: 'Usuarios',
						to: '/options/user',
						sub: [{ text: 'Usuarios', to: '/options/user' }],
					},
				]}
			/> */}
		</>
	);
};
