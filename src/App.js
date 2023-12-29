

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
