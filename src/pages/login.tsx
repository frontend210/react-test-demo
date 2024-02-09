import { useLoginByEmailMutation } from '@api/authApi.ts'
import LoginForm from '@components/LoginForm/LoginForm.tsx'

export default function Login() {
    const [loginByEmailFn] = useLoginByEmailMutation()

    return (
        <>
            <LoginForm loginByEmailFn={loginByEmailFn} />
        </>
    )
}
