import { useParams } from 'react-router-dom';

const Quotes = () => {
	const { serviceId } = useParams();

	return (
		<>
			<h2>serviceId: {serviceId}</h2>
		</>
	);
};
export default Quotes;
