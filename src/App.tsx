import { Router } from './router';
import { Store } from './store';

const App = () => {
	return (
		<Store>
			<Router />
		</Store>
	);
};
export default App;
