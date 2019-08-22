import React from 'react'
import { Button } from 'react-bootstrap';

const Previous = (props) => {
  if (props.currentPage > 1) {
    return (
      <Button
        size="sm"
        variant="light"
        onClick={() => {
          props.decrementPage(props.currentPage)
        }}>
          Previous
      </Button>
    )
  } else {
    return null
  }
}

export default Previous
