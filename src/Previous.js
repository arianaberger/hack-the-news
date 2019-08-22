import React from 'react'
import { Button } from 'react-bootstrap';

const Previous = (props) => {
  if (props.currentPage > 0) {
    return (
      <Button
        size="sm"
        variant="light"
        onClick={() => {
          props.changePage(props.currentPage, props.change)
        }}>
          Previous
      </Button>
    )
  } else {
    return null
  }
}

export default Previous
