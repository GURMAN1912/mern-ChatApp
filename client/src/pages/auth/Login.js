import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import LoginForm from '../../sections/auth/LoginForm'
const Login = () => {
  return (
    <Stack spacing={2} sx={{mb:5,position:"relative"}}>
      <Typography varient="h4">Login to ChatEase</Typography>      
      <Stack direction={"row"} spacing={0.5}>
        <Typography varient='body2'>new User?</Typography>
        <Link variant='subtitle2' to="/auth/register" component={RouterLink}>Create an account</Link>
      </Stack>
      <LoginForm/>
    </Stack>
  )
}

export default Login
