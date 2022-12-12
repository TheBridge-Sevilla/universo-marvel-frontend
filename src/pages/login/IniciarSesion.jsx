import './IniciarSesion.css'
import { Button, FloatingLabel, Form } from 'react-bootstrap'

function IniciarSesion() {
  return (
    <Form className='h-100 d-flex flex-column justify-content-center align-items-center outline'>
      <h1 className='mb-5'>Sign in</h1>
      <Form.Group>
        <FloatingLabel label='Usuario' className='mb-3'>
          <Form.Control type='text' size='lg' placeholder='Usuario' />
        </FloatingLabel>
        <FloatingLabel label='Contraseña' className='mb-3'>
          <Form.Control type='password' size='lg' placeholder='Password' />
        </FloatingLabel>
        <Button id='sign-in' size='lg' variant='danger'>
          Sign in
        </Button>
      </Form.Group>
    </Form>
  )
}

export default IniciarSesion
