import {Provider} from 'react-redux';

import '../styles/App.css';
import { store } from '../redux/storeRedux';
import CounterView from '../components/counterView';
import LogsView from '../components/logsView';

function App() {
  return (
    <Provider store={store}>
        <CounterView />
        <LogsView />  
    </Provider>
  );
}

export default App;
