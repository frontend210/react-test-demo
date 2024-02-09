/* eslint-disable import/no-named-default */
import { styled } from '@mui/material/styles'
import { default as MuiPaper, type PaperProps } from '@mui/material/Paper'

export const Paper = styled(MuiPaper)<PaperProps>(({ theme }) => ({
    borderRadius: theme.spacing(4),
    boxShadow: '0px 20px 36px -2px rgba(207,207,207,1)',
    maxWidth: 840,
    minWidth: 500,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6),
}))
