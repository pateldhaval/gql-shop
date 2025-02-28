import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const env = import.meta.env;

const httpLink = new HttpLink({
	uri: env.VITE_GRAPHQL_ENDPOINT,
	headers: {
		'x-hasura-admin-secret': env.VITE_HASURA_ADMIN_SECRET,
	},
});

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

export default client;
