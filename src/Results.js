import React from 'react';
import Moment from 'react-moment';

const Results = (props) => {

  const results = props.results.map(result => {
    let author = result.author
    let title = result.title
    let url = result.url
    let date = result.created_at

    return (
      <li>
        {author} - <a href={url} target='_blank'>{title}</a> - <Moment format="MMM DD, YYYY">{date}</Moment>
      </li>
    )
  })

  // const results = 'hello'
  return (
    <div>
      <ul>{results}</ul>
    </div>
  )
}

export default Results;
