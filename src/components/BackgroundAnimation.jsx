import React, { useEffect, useState } from 'react'
import { Box, useTheme } from '@mui/material'
import { motion, useReducedMotion } from 'framer-motion'

const BackgroundAnimation = () => {
  const theme = useTheme()
  const shouldReduceMotion = useReducedMotion()
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  if (!isVisible || shouldReduceMotion) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: theme.palette.background.default,
        }}
      />
    )
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        background: theme.palette.background.default,
      }}
    >
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          style={{
            position: 'absolute',
            background: theme.palette.mode === 'dark'
              ? `linear-gradient(45deg, 
                  ${theme.palette.primary.main}30, 
                  ${theme.palette.secondary.main}30)`
              : `linear-gradient(45deg, 
                  ${theme.palette.primary.main}20, 
                  ${theme.palette.secondary.main}20)`,
            borderRadius: '50%',
            width: Math.random() * 400 + 100, // 增加尺寸
            height: Math.random() * 400 + 100,
            opacity: theme.palette.mode === 'dark' ? 0.2 : 0.15, // 增加透明度
            willChange: 'transform',
            filter: 'blur(8px)', // 添加模糊效果
          }}
          animate={{
            x: ['-100%', '100%'],
            y: ['-100%', '100%'],
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 25 + 15, // 稍微加快动画
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
      {/* 添加额外的光晕效果 */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`glow-${index}`}
          style={{
            position: 'absolute',
            background: theme.palette.mode === 'dark'
              ? `radial-gradient(circle, 
                  ${theme.palette.primary.main}40 0%, 
                  transparent 70%)`
              : `radial-gradient(circle, 
                  ${theme.palette.primary.main}30 0%, 
                  transparent 70%)`,
            borderRadius: '50%',
            width: '600px',
            height: '600px',
            opacity: theme.palette.mode === 'dark' ? 0.3 : 0.2,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
            delay: index * 2,
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

export default React.memo(BackgroundAnimation)