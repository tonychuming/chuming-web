import React from 'react'
import { Box } from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'

const AvatarContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '250px',
  height: '250px',
  margin: '0 auto',
}))

const AvatarImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
})

const AvatarOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}80, ${theme.palette.secondary.main}80)`,
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
}))

const StylishAvatar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <AvatarContainer>
        <AvatarImage src="/path-to-your-photo.jpg" alt="Chuming Lin" />
        <AvatarOverlay />
      </AvatarContainer>
    </motion.div>
  )
}

export default StylishAvatar