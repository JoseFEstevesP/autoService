export const renderErrorMessage = (message: string) => {
	const lines = message?.split('\n');
	return (
		<span className='input__error'>
			{lines?.map(line => (
				<span key={crypto.randomUUID()}>
					{line}
					<br />
				</span>
			))}
		</span>
	);
};
