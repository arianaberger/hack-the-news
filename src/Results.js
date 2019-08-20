import React from 'react';

const Results = (props) => {

  const results = props.results.map(result => {
    let author = result.author
    let title = result.title
    let url = result.url
    let date = result.created_at

    return (
      `<li>
        ${author} - <a href="${url}" target=_blank>${title}</a> - ${date}
      </li>`
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
