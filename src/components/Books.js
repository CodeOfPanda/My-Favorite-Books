

export default function Books(props) {
    return (
        <div className="books-container">
            <div className="img-container">
                <a href={props.b.content.goodreads_url}>
                    <img className="cover-img" src={props.b.content.img} alt="book cover" />
                </a>

            </div>
            <div className="text-container">
                <a className="title-link" href={props.b.content.goodreads_url}>{props.b.content.title}</a>
               
                <h3 className="author">{props.b.author}</h3>
                <p className="published-date">Published on {props.b.content.publishedDate}</p>
                
                {props.b.content.series.seriesTitle && <a className="series-link" href={props.b.content.series.series_url}>Series: {props.b.content.series.seriesTitle}</a>}

                <ul className="other-books-list">
                {props.b.content.series.seriesTitle && props.b.content.series.other_books.slice(0,9).map(book => (
                    <li className="other-book" key={book}>{book}</li>
                ))}
                {props.b.content.series.other_books.length > 10 ? <li className="other-book">...</li> : <></>}
                </ul>
            </div>
        </div>
    )
}