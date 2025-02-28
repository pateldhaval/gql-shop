import { gql } from '@apollo/client';

export const getCustomers = gql`
	query getCustomers {
		customer {
			id
			first_name
			last_name
			email
		}
	}
`;
