/* eslint-disable import/no-named-default */
import { styled } from '@mui/material/styles'
import { default as MuiButton, type ButtonProps } from '@mui/material/Button'
import GoogleIcon from '@mui/icons-material/Google'
import * as React from 'react'

const StyledIconButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    minWidth: 'unset',
    padding: '7px 12px',

    '& .MuiButton-startIcon': {
        margin: 0,
    },
}))

interface IconOnlyOutlinedButtonProps {
    icon: React.ReactNode
}
export function IconOnlyOutlinedButton({ icon }: IconOnlyOutlinedButtonProps) {
    return <StyledIconButton variant="outlined" startIcon={icon} />
}

const StyledPrimaryButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
    borderRadius: theme.spacing(2),
}))

export function FullWidthPrimaryButton(props: ButtonProps) {
    return <StyledPrimaryButton fullWidth color="primary" {...props}></StyledPrimaryButton>
}

const StyleGoogleButton = styled(StyledIconButton)<ButtonProps>((_) => ({
    width: 'calc(100% - 120px)',
}))

export function GoogleSignInOutlinedButton() {
    return (
        <StyleGoogleButton variant="outlined" startIcon={<GoogleIcon />}>
            Sign in with Google
        </StyleGoogleButton>
    )
}
