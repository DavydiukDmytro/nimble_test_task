import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectStatusLoading } from '../../store/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from '../../store/contacts/thunk';
import { Modal } from '../../component/Modal';
import { Loader } from '../../component/Loader';

const Contacts = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectStatusLoading);
	const error = useSelector(selectError);

	useEffect(() => {
		dispatch(getContactsThunk());
	}, [dispatch]);

	return (
		<div>
			<section>
				<h2>Create Contacts</h2>
			</section>
			<section>
				<h2>Contacts</h2>
			</section>
			{isLoading && (
				<Modal>
					<Loader />
				</Modal>
			)}
			{error && (
				<Modal>
					<p>Oops, something went wrong, try again later.</p>
					<p>Error: {error}</p>
				</Modal>
			)}
		</div>
	);
};

export default Contacts;
