import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { Alert, Button, IconButton, InputAdornment, Stack } from '@mui/material'
import { RHFTextfield } from '../../components/hook-form'
import RHFTextField from '../../components/hook-form/RHFTextField'
import { Eye, EyeSlash } from 'phosphor-react'
const RegisterForm = () => {
    const [showPassword,setShowPassword]=useState(false) 
    const RegisterSchema=Yup.object().shape({
        firstName:Yup.string().required("First name is Required"),
        lastName:Yup.string().required("last name is Required"),
        email:Yup.string().required("Email is required").email("Email must be valid"),
        password:Yup.string().required("Password is required") 
    })
    const defaultValues={
        firstName:"",
        lastName:"",
        email:"demo@kjgf.com",
        password:"password"
    }
    const methods=useForm ({
        resolver:yupResolver(RegisterSchema),
        defaultValues
    }) 
    const {reset,setError,handleSubmit,formState:{errors},}=methods
    const onSubmit=async(data)=>{
        try {
            
        } catch (error) {
            console.log(error)
            reset()
            setError('afterSubmit',{
                ...error,
                message:error.message
            })
        }
    }
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} >
        <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{xs:"column" ,sm:"row"}} spacing={2}>
            <RHFTextfield name={"firstname"} label="First Name"/>
            <RHFTextfield name={"Lastname"} label="Last Name"/>
        </Stack>
        <RHFTextField name="email" label="Email address" />

<RHFTextField
  name="password"
  label="Password"
  type={showPassword ? "text" : "password"}
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowPassword(!showPassword)}
          edge="end"
        >
          {showPassword ? <Eye /> : <EyeSlash />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
</Stack>
<Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        // loading={isLoading}
        sx={{
            mt:3,
          bgcolor: "text.primary",
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        Create Account
      </Button>

    </FormProvider>
  )
}

export default RegisterForm
