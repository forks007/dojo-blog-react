
import './App.css';

function App() {
  const title = "welcome to the new blog"
  const likes = "50"
  //  const person = {name:'yoshi', age:'50', id:'1'}
  const links = "http://www.google.com";



  return (
    <div className="App">
      <div className="cotent">
        <h1>{title}</h1>
        <p>liked {likes} times</p>
        <p>[1,2,2,5]</p>
        <a href={links}>Google site</a>
      </div>
    </div>
  );
}

export default App;
