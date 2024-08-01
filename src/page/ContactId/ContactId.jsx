import { useParams } from 'react-router-dom';

const ContactId = () => {
	const { contactId } = useParams();
	return <>ContactId: {contactId}</>;
};

export default ContactId;
