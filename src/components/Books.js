

export default function Books(props) {
    // console.log(props)
    
    return (
        <div className="books-container">
            <h1 className="title">{props.b.content.title}</h1>
            <h3 className="author">{props.b.author}</h3>
            <p className="published-date">{props.b.content.publishedDate}</p>
            <a className="goodreads-link" href={props.b.content.goodreads_url}>Goodreads</a>
            {props.b.content.series.seriesTitle && <h4 className="series-title">{props.b.content.series.seriesTitle}</h4>}
            <ul className="other-books-list">
            {props.b.content.series.seriesTitle && props.b.content.series.other_books.map(b => (
                <li className="other-book" key={b}>{b}</li>
            ))}
            </ul>
        </div>
    )
}