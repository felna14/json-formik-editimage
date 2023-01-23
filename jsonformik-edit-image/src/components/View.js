import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { viewUserData } from '../actions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const View = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { viewData } = useSelector((state) => state.postReducer);
  //   console.log(viewData)

  useEffect(() => {
    if (id) {
      dispatch(viewUserData(id));
    }
  }, []);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={viewData.image} />
        <Card.Body>
          <Card.Title>{viewData.firstName}</Card.Title>
          <Card.Text>{viewData.lastName}</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" as={Link} to={'/'}>
        Back
      </Button>
    </div>
  );
};

export default View;
