import { Search } from '@material-ui/icons';
import './App.css';
function App() {
  return (
  <div className="App">
     <div className='main'>
           
           <input type={'search'} className='input' placeholder='type here ...' ></input> <Search style={{position:"absolute",left:"80%"}}/>
           <h1 className='aH1'>Hello guys</h1>

     </div>
     <div className="content">
       <div className='news'>
         
       </div>

     </div>
    </div>
  );
}

export default App;
