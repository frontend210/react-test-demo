import * as yup from 'yup'
import { type ILoginForm } from '@components/LoginForm/LoginForm.type.ts'

const LoginFormValidationSchema: yup.ObjectSchema<ILoginForm> = yup.object({
    username: yup
        .string()
        .required('Please enter your username or email')
        .email()
        .matches(/^(?!.*@[^,]*,)/),
    password: yup.string().required('Please enter your password'),
    // .min(8, 'Password is too short - should be 8 chars minimum.')
    // .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
})

export default LoginFormValidationSchema
