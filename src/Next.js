import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';


//Buttons should only appears once search is started/user is on 2nd page for back button
const Next = (props) => {
  for (let i = 0; i < props.pagesTotal; i++) {
    return (
    <Form.Row>
      <Col>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            props.decrementPage(props.currentPage)
          }}>
            Previous
          </Button>
      </Col>
      <Col>
        <Button
          size="sm"
          variant="light"
          onClick={() => {
            props.incrementPage(props.currentPage)
          }}>
            Next
        </Button>
      </Col>
    </Form.Row>
    )
  }
}

export default Next
