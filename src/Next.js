import React from 'react';

const Next = (props) => {
  for (let i = 0; i < props.pagesTotal; i++) {
    return (
    <div>
    <button
      onClick={() => {
        props.decrementPage(props.currentPage)
      }}>
        Previous
      </button>

      <button
        onClick={() => {
          props.incrementPage(props.currentPage)
        }}>
          Next
      </button>


      </div>
    )
  }
}

export default Next
