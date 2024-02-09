/* eslint-disable import/no-named-default */
import { default as MuiFormLabel, type FormLabelProps } from '@mui/material/FormLabel'
import { default as MuiFormControlLabel, type FormControlLabelProps } from '@mui/material/FormControlLabel'
import { default as MuiTextField, type TextFieldProps } from '@mui/material/TextField'
import { default as MuiLink, type LinkProps } from '@mui/material/Link'
import { default as MuiFormControl, type FormControlProps } from '@mui/material/FormControl'

import { styled } from '@mui/material/styles'
import { alpha } from '@mui/material'

export const FormControl = styled(MuiFormControl)<FormControlProps>((_) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
}))

export const FormLabel = styled(MuiFormLabel)<FormLabelProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        },
    },
}))

export const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    color: theme.palette.grey['600'],
}))

export const Link = styled(MuiLink)<LinkProps>(({ theme }) => ({
    color: theme.palette.secondary.main,
    textDecorationColor: theme.palette.secondary.main,
    '&:hover': {
        color: theme.palette.secondary.main,
        textDecorationColor: theme.palette.secondary.main,
    },
}))

export const TextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => ({
    color: theme.palette.secondary.main,
    outline: 'none',
    '& .MuiInputBase-root': {
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderColor: theme.palette.secondary.main,
        // borderRadius: '4px',
        outline: 'none',
    },
    '& .MuiInputBase-input': {
        // borderWidth: '1px',
        // borderStyle: 'solid',
        // borderColor: '#becdd8',
        // borderRadius: '4px',
        // outlineColor: 'red'
        outline: 'none',
        // '&:hover, &.Mui-focusVisible': {
        //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
        // },
        // '&.Mui-active': {
        //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
        // },
    },
}))
