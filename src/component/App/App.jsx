import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contacts from '../../page/Contacts/Contacts';
import { lazy } from 'react';

const ContactId = lazy(() => import('../../page/ContactId/ContactId'));
const NotFound = lazy(() => import('../../page/NotFound/NotFound'));

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Contacts />} />
			<Route path='/contact/:contactId' element={<ContactId />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};
