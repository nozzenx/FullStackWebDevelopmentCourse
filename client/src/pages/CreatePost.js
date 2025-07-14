import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup' // This package is used to validate the form.
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Field = (id: for css, name: needs to be same with database name, placeholder: for user to know what to input)
// button = (type: submit) 

function CreatePost() {

  let navigate = useNavigate();

  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {navigate("/");})
    
  }

  const validationSchema = Yup.object().shape({
    title : Yup.string().required(),
    postText : Yup.string().required(),
    username : Yup.string().min(3).max(15).required(),
  });

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className = "formContainer">
                <label className = "inputCreatePostText">Title</label>
                <ErrorMessage name='title' component="span"/>
                <Field id = "inputCreatePost" name = "title" placeholder = "(ex. Falling cat photo)" autoComplete = "off"/> 

                <label className='inputCreatePostText'>Description</label>
                <ErrorMessage name='postText' component="span"/>
                <Field id = "inputCreatePost" name = "postText" placeholder = "(ex. Cat is falling!!)" autoComplete='off'/>

                <label className='inputCreatePostText'>Username</label>
                <ErrorMessage name='username' component="span"/>
                <Field id = "inputCreatePost" name = "username" placeholder = "(ex. nightowl23)" autoComplete = "off"/>

                <button type = "submit">Create Post</button> 
                
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost