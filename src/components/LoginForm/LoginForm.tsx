import { Checkbox, Container, CssBaseline, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import { FormLabel, TextField, FormControlLabel, Link, FormControl } from '../MuiOverrides/MuiFormElements.ts'
import {
    FullWidthPrimaryButton,
    GoogleSignInOutlinedButton,
    IconOnlyOutlinedButton,
} from '../MuiOverrides/MuiButtons.tsx'
import { Paper } from '../MuiOverrides/MuiSufaces.ts'
import type { ILoginForm, ILoginFormProps } from '@components/LoginForm/LoginForm.type.ts'
import LoginFormValidationSchema from '@components/LoginForm/LoginForm.validator.ts'
import type { ILoginByEmailReq } from '@api/types.ts'

export default function LoginForm({ loginByEmailFn }: ILoginFormProps) {
    const formik = useFormik<ILoginForm>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginFormValidationSchema,
        onSubmit: async (formValue) => {
            await loginByEmailFn({
                identifier: formValue.username,
                identifierType: 'email',
                password: formValue.password,
            } satisfies ILoginByEmailReq)
        },
    })

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <form onSubmit={formik.handleSubmit}>
                    <Paper elevation={3} sx={{ width: '500px' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                <Typography variant={'h5'} mb={3}>
                                    <span>Sign In</span>
                                </Typography>
                                <Typography mb={2}>
                                    <span>
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        If you don't have an account you can <br />
                                        <Link href="/signup">Register here</Link>
                                    </span>
                                </Typography>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                                mb={3}
                            >
                                <GoogleSignInOutlinedButton />
                                <IconOnlyOutlinedButton icon={<FacebookIcon />} />
                                <IconOnlyOutlinedButton icon={<LinkedInIcon />} />
                            </Grid>

                            <Grid item xs={12}>
                                <Divider>or</Divider>
                            </Grid>

                            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                <FormControl margin="dense">
                                    <Stack sx={{ flex: 1 }}>
                                        <FormLabel sx={{ padding: '8px 0' }}>
                                            <span>Enter your username or email address</span>
                                        </FormLabel>

                                        <TextField
                                            id="outlined-multiline-flexible"
                                            fullWidth
                                            value={formik.values.username}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                formik.setFieldValue('username', event.target.value)
                                            }}
                                        ></TextField>

                                        <Typography color="error" variant="caption">
                                            {formik.errors.username}
                                        </Typography>
                                    </Stack>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sx={{ textAlign: 'left' }}>
                                <FormControl margin="dense">
                                    <Stack sx={{ flex: 1 }}>
                                        <FormLabel sx={{ padding: '8px 0' }}>
                                            <span>Enter your password</span>
                                        </FormLabel>

                                        <TextField
                                            id="outlined-multiline-flexible"
                                            fullWidth
                                            value={formik.values.password}
                                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                formik.setFieldValue('password', event.target.value)
                                            }}
                                        ></TextField>

                                        <Typography color="error" variant="caption">
                                            {formik.errors.password}
                                        </Typography>
                                    </Stack>
                                </FormControl>
                            </Grid>

                            <Grid
                                item
                                xs={12}
                                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                            >
                                <FormControlLabel control={<Checkbox />} label="Remember me" />
                                <Link href="#">Forgot Password?</Link>
                            </Grid>

                            <Grid item xs={12}>
                                <FullWidthPrimaryButton
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        textTransform: 'none',
                                        marginLeft: 'auto',
                                    }}
                                >
                                    <span>Sign In</span>
                                </FullWidthPrimaryButton>
                            </Grid>
                        </Grid>
                    </Paper>
                </form>
            </Container>
        </React.Fragment>
    )
}
