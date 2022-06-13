import './app.css';
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';
import Analysis  from './pages/Analysis';
import { BrowserRouter, Route , Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
    <SideBar/>
      <Routes>
        <Route exact path ="/" element={ <Analysis/>} />
      </Routes>
    </div> 
    </BrowserRouter>
   
  );
}

export default App;
