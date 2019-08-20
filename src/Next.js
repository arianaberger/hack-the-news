import React from 'react';

const Next = (props) => {
  for (let i = 1; i <= props.pagesTotal; i++) {
    return (
      <button
        onClick={() => {
          props.handleAPI(props.search)
          props.incrementPage(props.currentPage)
        }}>
          >>
        </button>
    )
  }
}

export default Next
