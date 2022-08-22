

import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = "welcome to the new blog"
  // const likes = "50"
  //  const person = {name:'yoshi', age:'50', id:'1'}
  // const links = "http://www.google.com";



  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
