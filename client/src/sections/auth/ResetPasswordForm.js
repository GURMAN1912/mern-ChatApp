import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import FormProvider from '../../components/hook-form/FormProvider'
import { Alert, Button, IconButton, InputAdornment, Stack } from '@mui/material'
import { RHFTextfield } from '../../components/hook-form'
import RHFTextField from '../../components/hook-form/RHFTextField'
import { Eye, EyeSlash } from 'phosphor-react'
const ResetPasswordForm = () => {
    const [showPassword,setShowPassword]=useState(false) 
    const ResetSchema=Yup.object().shape({
        email:Yup.string().required("Email is required").email("Email must be valid"),
    })
    const defaultValues={
        email:"demo@kjgf.com",
        
    }
    const methods=useForm ({
        resolver:yupResolver(ResetSchema),
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
        <RHFTextField name="email" label="Email address" />


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
        Send Request
      </Button>

    </FormProvider>
  )
}

export default ResetPasswordForm
