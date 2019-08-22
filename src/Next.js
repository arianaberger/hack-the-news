import React from 'react';
import { Button } from 'react-bootstrap';


//Buttons should only appears once search is started/user is on 2nd page for back button
const Next = (props) => {
  for (let i = 0; i < props.pagesTotal; i++) {
    return (
    <div>
    <Button
      onClick={() => {
        props.decrementPage(props.currentPage)
      }}>
        Previous
      </Button>

      <Button
        onClick={() => {
          props.incrementPage(props.currentPage)
        }}>
          Next
      </Button>


      </div>
    )
  }
}

export default Next
