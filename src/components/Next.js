import React from 'react'
import { Button } from 'react-bootstrap';

const Next = (props) => {
  if (props.currentPage < props.pagesTotal) {
    return (
      <Button
        size="sm"
        variant="light"
        onClick={() => {
          props.changePage(props.change)
        }}>
          Next
      </Button>
    )
  } else {
    return null
  }
}

export default Next
