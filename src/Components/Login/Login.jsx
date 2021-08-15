import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { postLogin } from './post'

function Login() {
  const notify = () =>
    toast.error('Los datos no son validos para ingresar!', {
      position: toast.POSITION.BOTTOM_CENTER,
    })

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Correo invalido')
      .required('Debes ingresar tu dirección correo'),
    password: Yup.string().required('Debes ingresar la contraseña'),
  })
  return (
    <div className='container p-5'>
      <div className='pt-5 row justify-content-center '>
        <div className='col-6'>
          <h3 className='text-center'>Bienvenido</h3>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values, { resetForm }) => {
              await new Promise((r) => setTimeout(r, 500))

              if (!postLogin(values)) {
                resetForm({ values: '' })
                notify()
              }
            }}
          >
            {({ errors, touched }) => (
              <Form className='cont rounded'>
                <div className=' row form-group mb-3 text-center'>
                  <Field name='email' type='email' placeholder='Email' />
                  {errors.email && touched.email ? (
                    <div className='text-danger'>{errors.email}</div>
                  ) : null}
                </div>
                <div className='row form-group mb-3  text-center'>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Password'
                  />
                  {errors.password && touched.password ? (
                    <div className='text-danger'>{errors.password}</div>
                  ) : null}
                </div>
                <button
                  type='submit'
                  className='btn btn-primary col-12 rounded'
                >
                  Enviar
                </button>
                <ToastContainer />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
