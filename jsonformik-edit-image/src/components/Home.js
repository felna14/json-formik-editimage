import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, deleteUserData } from '../actions';

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div>
      <div>
        <button>
          <Link to="/register-form"> ADD</Link>
        </button>
      </div>
      {data.map((d, index) => (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={d.image} />
          <Card.Body>
            <Card.Title>{d.firstName}</Card.Title>
            <Card.Text>{d.lastname}</Card.Text>
            <Card.Text>{d.email}</Card.Text>
            <Button variant="primary" as={Link} to={`/edit-form/${d.id}`}>
              EDIT
            </Button>
            <Button
              variant="primary"
              onClick={() => dispatch(deleteUserData(d.id))}
            >
              Delete
            </Button>
            <Button variant="primary" as={Link} to={`/view-form/${d.id}`}>
              View
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
