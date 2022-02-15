
import './css/App.css';
import Books from './components/Books';
import bookData from './data/book-data'

function App() {
  return (
    <div className="App">
     <>
      {bookData.books.map(b => (
        <Books key={b.author} b={b}/>
      ))}
     </>
    </div>
  );
}

export default App;
