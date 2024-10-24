import React from 'react'
import { Box, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

const TechBackground = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#121212',
        transition: 'background-color 0.3s ease',
      }}
    >
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            background: theme.palette.mode === 'light' 
              ? 'linear-gradient(45deg, rgba(100, 100, 255, 0.1), rgba(100, 255, 100, 0.1))'
              : 'linear-gradient(45deg, rgba(100, 100, 255, 0.05), rgba(100, 255, 100, 0.05))',
            borderRadius: '50%',
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </Box>
  )
}

export default TechBackground