import React from 'react'
import { useState } from 'react';
import {TextField,Stack, Button} from '@mui/material'
import { Link } from 'react-router-dom';


const Register = () => {
    const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, such as sending the data to the server
    console.log('Form submitted:', { companyName, email, password });
  };

  return (
    <form className="signup-form w-[800px]" onSubmit={handleSubmit}>
      <Stack spacing={3}>
          <h2 className='text-3xl font-semibold'>Create an Account</h2>
          <div className="flex flex-col">
            <label htmlFor="companyName">Company Name</label>
            <TextField
              type="text"
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <TextField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <TextField
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button color='mainTone' variant='contained' type="submit">Sign Up</Button>
          <p>Already have an account? <Link className='font-semibold' to={'/login'}>Log in now.</Link></p>

      </Stack>
    </form>
  )
}

export default Register
