

export default function Books(props) {
    // console.log(props)
    
    return (
        <div className="books-container">
            <h1 className="title">{props.b.content.title}</h1>
            <h3 className="author">{props.b.author}</h3>
            <p className="published-date">{props.b.content.publishedDate}</p>
            <a className="goodreads-link" href={props.b.content.goodreads_url}>Goodreads</a>
        </div>
    )
}