import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import IteamContainer from './components/IteamContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <IteamContainer cake/>
        <IteamContainer/>
        <CakeContainer />
        <HooksCakeContainer />
        <NewCakeContainer/>
        <IceCreamContainer/> */}
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
