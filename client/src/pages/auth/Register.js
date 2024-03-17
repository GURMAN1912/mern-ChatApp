import React from 'react'
import {Link, Stack, Typography }from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import RegisterForm from '../../sections/auth/RegisterForm'
const Register = () => {
  return (
    <Stack spacing={2} sx={{mb:5,position:"relative"}}>
        <Typography variant='h4'>
            Get Started With ChatEase
        </Typography>
        <Stack direction={"row"}  spacing={0.5}>
            <Typography varient="body2">Already have an account</Typography>
            <Link to={"/auth/login"} component={RouterLink}>Sign in</Link>
        </Stack>
        <Typography component={"div"} sx={{color:"text.secondary",mt:3,typography:'caption',textAlign:'center'}}>
            {'By signing up,I agree to'}
            <Link underline='always' color={"text.primary"}>
                Terms of service
            </Link>
            {'and'}
            <Link underline='always' color={"text.primary"}>
                Privacy Policy
            </Link>

        </Typography>
        <RegisterForm/>
    </Stack>
  )
}

export default Register
