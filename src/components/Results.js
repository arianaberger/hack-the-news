import React from 'react';
import Moment from 'react-moment';

const Results = (props) => {

  const results = props.results.map(result => {
    //Only show results with a URL link
    if (result.url || result.story_url) {
      let author = result.author
      let title = result.title || result.story_title
      let url = result.url || result.story_url
      let date = result.created_at

      return (
        <div className="Result" key={result.objectID}>
          <a
            className="App-link"
            href={url} target='_blank' rel="noopener noreferrer">{title}
          </a>
          <div className="ResultSub">
            <span>{author}</span>
            <span>
                | <Moment format="MMM DD, YYYY">{date}</Moment>
           </span>
         </div>
       </div>
     )
    }
  })

  return (
    <>
      {results}
    </>
  )
}

export default Results;
