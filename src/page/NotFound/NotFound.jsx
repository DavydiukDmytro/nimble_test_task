import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const [count, setCount] = useState(10);
	const navigate = useNavigate();

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (count !== 0) {
				setCount(count - 1);
			} else {
				navigate('/', { replace: true });
			}
		}, 1000);
		return () => {
			clearInterval(intervalId);
		};
	}, [count, navigate]);
	return (
		<>
			The requested page does not exist. You will be redirected to the main page in {count} seconds!
		</>
	);
};

export default NotFound;
