import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';
import Previous from './Previous';
import Next from './Next';

const Increment = (props) => {
  
  const {changePage, pagesTotal, currentPage, next, previous} = props

  return (
    <div className="Next">
      <Form.Row>
        <Col>
          <Previous changePage={changePage} currentPage={currentPage} change={previous}/>
        </Col>
        <Col>
          <Next changePage={changePage} pagesTotal={pagesTotal} currentPage={currentPage} change={next}/>
        </Col>
      </Form.Row>
    </div>
  )
}

export default Increment
