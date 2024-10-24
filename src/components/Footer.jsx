import React from 'react'
import { Box, Container, IconButton, useTheme } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import ChatIcon from '@mui/icons-material/Chat'
import { styled } from '@mui/system'

const StyledFooter = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(2, 0),
  background: 'transparent',
  backdropFilter: 'blur(8px)',
  borderTop: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
  color: theme.palette.text.secondary,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.mode === 'dark' 
      ? 'rgba(18, 18, 18, 0.3)'
      : 'rgba(255, 255, 255, 0.3)',
    zIndex: -1,
  },
}))

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}))

function Footer() {
  const theme = useTheme()

  return (
    <StyledFooter component="footer">
      <Container 
        maxWidth="lg" 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ 
          fontSize: '0.875rem',
          opacity: 0.8,
        }}>
          © {new Date().getFullYear()} Chuming Lin. All rights reserved.
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <SocialIconButton 
            href="https://www.linkedin.com/in/chuming-lin-500550325" 
            target="_blank" 
            size="small"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="small" />
          </SocialIconButton>
          <SocialIconButton 
            href="https://www.facebook.com/profile.php?id=100071700158816" 
            target="_blank" 
            size="small"
            aria-label="Facebook"
          >
            <FacebookIcon fontSize="small" />
          </SocialIconButton>
          <SocialIconButton 
            href="https://line.me/ti/p/t5VDq5MYRp" 
            target="_blank" 
            size="small"
            aria-label="Line"
          >
            <ChatIcon fontSize="small" />
          </SocialIconButton>
        </Box>
      </Container>
    </StyledFooter>
  )
}

export default Footer