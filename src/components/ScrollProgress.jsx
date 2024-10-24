import React, { useState, useEffect } from 'react'
import { Box, LinearProgress } from '@mui/material'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollPosition = window.scrollY
      const newProgress = (scrollPosition / totalHeight) * 100
      setProgress(newProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }}>
      <LinearProgress variant="determinate" value={progress} sx={{ height: 3 }} />
    </Box>
  )
}

export default ScrollProgress