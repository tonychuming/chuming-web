import React from 'react'
import { Box, Card, CardContent, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'

const GlassCard = styled(motion(Card))(({ theme }) => ({
  background: theme.palette.mode === 'dark'
    ? 'rgba(18, 18, 18, 0.7)'
    : 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(255, 255, 255, 0.3)'}`,
  borderRadius: theme.spacing(3),
  boxShadow: theme.palette.mode === 'dark'
    ? '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
    : '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 40px 0 rgba(0, 0, 0, 0.4)'
      : '0 12px 40px 0 rgba(31, 38, 135, 0.3)',
  },
}))

const CardInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}))

const GlassCardComponent = ({ children, ...props }) => {
  const theme = useTheme()

  return (
    <GlassCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      <CardInner>
        <CardContent sx={{ p: 0 }}>{children}</CardContent>
      </CardInner>
    </GlassCard>
  )
}

export default GlassCardComponent