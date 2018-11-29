import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <Form.Field >
            <label>Name</label>
            <input placeholder='Name' />
            
    </Form.Field>
    <Form.Field >
      <label>Address</label>
      <input placeholder='Address' />
    </Form.Field>
        
        <Button floated='right'>Close</Button>
        <Button type='submit' floated='right'>Save</Button>

  </Form>
);

export default FormExampleForm