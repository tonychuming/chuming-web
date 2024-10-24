import React from 'react'
import { Box, Typography, Container, IconButton, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const Hero = ({ title, subtitle, fullScreen = false, onScrollClick }) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        position: 'relative',
        height: fullScreen ? '100vh' : '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        // 为非全屏 Hero 添加顶部内边距，确保内容不被导航栏遮挡
        pt: fullScreen ? 0 : '64px', // 64px 是导航栏的高度
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: fullScreen ? 4 : 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              fontSize: fullScreen 
                ? { xs: '3rem', sm: '4rem', md: '5rem' }
                : { xs: '2rem', sm: '3rem', md: '4rem' },
              color: theme.palette.text.primary,
            }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                color: theme.palette.text.secondary,
              }}
            >
              {subtitle}
            </Typography>
          )}
          {fullScreen && onScrollClick && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <IconButton
                onClick={onScrollClick}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <KeyboardArrowDownIcon fontSize="large" />
              </IconButton>
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Box>
  )
}

export default Hero