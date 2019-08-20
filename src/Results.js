import React from 'react';
import Moment from 'react-moment';

const Results = (props) => {

  const results = props.results.map(result => {
    let author = result.author
    let title = result.title
    let url = result.url
    let date = result.created_at

    return (
      <div className="Result">
        <a
          className="App-link"
          href={url} target='_blank'>{title}
        </a>
        <div className="ResultSub">
          <span>{author}</span>
          <span>
            | <Moment format="MMM DD, YYYY">
              {date}
            </Moment>
         </span>
       </div>
     </div>
    )
  })

  // const results = 'hello'
  return (
    <div className="Results">
      {results}
    </div>
  )
}

export default Results;
