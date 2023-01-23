import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ImageUploader from 'react-images-upload';
import { useDispatch, useSelector } from 'react-redux';
import { edittedUserData, editUserData, postUserData } from '../actions';
import { useNavigate, useParams } from 'react-router-dom';

const RegisterForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { editData } = useSelector((state) => state.postReducer);
  //   console.log(editData);

  const [image, setImage] = useState('');
  const [imageError, setImageError] = useState('');

  const onDrop = (pictureFiles, pictureDataURLs) => {
    setImage(pictureDataURLs);
  };

  useEffect(() => {
    if (id) {
      dispatch(editUserData(id));
    }
  }, []);
  const initial = {
    firstName: id ? editData.firstName : '',
    lastName: id ? editData.lastName : '',
    email: id ? editData.email : '',
  };
  const validation = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  });
  return (
    <div>
      <Formik
        initialValues={initial}
        validationSchema={validation}
        onSubmit={(values, { resetForm }) => {
          if (image === '') {
            setImageError('Required');
          }
          if (id) {
            let img = image ? image : editData.image;
            dispatch(edittedUserData({ ...values, image: img }, id));
            navigate('/');
          } else {
            values = { ...values, image };
            dispatch(postUserData(values));
            navigate('/');
            resetForm();
          }
        }}
        enableReinitialize
      >
        <Form>
            <div className='container'>
          <div className="mb-4">
            <div>
              <label htmlFor="firstName">First Name</label>
            </div>
            <Field name="firstName" type="text" className="form-control" />
            <div className="text-danger">
              <ErrorMessage name="firstName" />
            </div>
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="lastName">Last Name</label>
            </div>

            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage name="lastName" />
          </div>

          <div className="mb-4">
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <Field name="email" type="email"  className="form-control"/>
            <ErrorMessage name="email" />
          </div>

          <div className="mb-4">
            <label>Image:</label>
            {id ? (
              <img src={editData.image} style={{ height: '100px' }} />
            ) : null}
            <ImageUploader
              withIcon={true}
              buttonText="Choose images"
              withPreview={true}
              value={image}
              singleImage={true}
              onChange={onDrop}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
            />
            <div className="text-danger">{imageError}</div>
          </div>

          <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
