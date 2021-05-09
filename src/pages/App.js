import {Provider} from 'react-redux';

import '../styles/App.css';
import { store } from '../redux/storeRedux';
import CounterView from '../components/counterView';

function App() {
  return (
    <Provider store={store}>
        <CounterView />
    </Provider>
  );
}

export default App;
