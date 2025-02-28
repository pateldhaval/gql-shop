import { useQuery } from '@apollo/client';
import { getCustomers } from './lib/apollo/queries';

const App = () => {
	const { loading, error, data: customers } = useQuery(getCustomers);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<h3>Customers</h3>
			{customers && <pre>{JSON.stringify(customers, null, 2)}</pre>}
		</>
	);
};

export default App;
