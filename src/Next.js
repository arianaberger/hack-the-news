import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import Previous from './Previous';


//Buttons should only appears once search is started/user is on 2nd page for back button
const Next = (props) => {
  for (let i = 0; i < props.pagesTotal; i++) {
    return (
      <div className="Next">
    <Form.Row>
      <Col>
        <Previous total={props.pagesTotal} currentPage={props.currentPage} decrementPage={props.decrementPage}/>
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
    </div>
    )
  }
}

export default Next
