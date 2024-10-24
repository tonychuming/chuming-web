import React from 'react'
import { AppBar, Box, IconButton, Typography, useTheme } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import { styled } from '@mui/system'
import { motion } from 'framer-motion'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: 'none',
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
  }
}))

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 4),
  maxWidth: '1400px',
  margin: '0 auto',
  width: '100%',
}))

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  textDecoration: 'none',
}))

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(4),
}))

const NavLink = styled(Link)(({ theme, active }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  letterSpacing: '0.5px',
  position: 'relative',
  padding: '4px 0',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: active ? '100%' : '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
}))

const Header = ({ toggleMode, mode }) => {
  const theme = useTheme()
  const location = useLocation()

  return (
    <StyledAppBar position="fixed">
      <HeaderContainer>
        <Logo
          component={motion.div}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            CL
          </Link>
        </Logo>

        <NavLinks>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>HOME</NavLink>
          <NavLink to="/education" active={location.pathname === '/education' ? 1 : 0}>EDUCATION</NavLink>
          <NavLink to="/experience" active={location.pathname === '/experience' ? 1 : 0}>EXPERIENCE</NavLink>
          <NavLink to="/skills" active={location.pathname === '/skills' ? 1 : 0}>SKILLS</NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>CONTACT</NavLink>
          <IconButton onClick={toggleMode} sx={{ color: theme.palette.text.primary, ml: 2 }}>
            {mode === 'dark' ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
          </IconButton>
        </NavLinks>
      </HeaderContainer>
    </StyledAppBar>
  )
}

export default Header