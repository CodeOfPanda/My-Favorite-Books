
import './css/App.css';
import Books from './components/Books';
import bookData from './data/book-data'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
     <>
     <Navbar/>
      {bookData.books.map(b => (
        <Books key={b.author} b={b}/>
      ))}
     </>
    </div>
  );
}

export default App;
