import React, { useRef } from 'react'
import { Typography, Box, Container, Grid, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'
import Hero from '../components/Hero'
import GlassCard from '../components/GlassCard'
import StylishAvatar from '../components/StylishAvatar'
import { Link } from 'react-router-dom'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  position: 'relative',
  zIndex: 1,
}))

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}))

const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}))

const TextContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2, 4),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2),
  },
}))

const Home = () => {
  const theme = useTheme()
  const aboutRef = useRef(null)

  const handleScrollClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Hero
        title="Chuming Lin"
        subtitle="Software Engineering Student & Aspiring Innovator"
        fullScreen={true}
        onScrollClick={handleScrollClick}
      />
      <ContentBox ref={aboutRef}>
        <Container maxWidth="lg">
          <GlassCard>
            <StyledGrid container>
              <Grid item xs={12} md={5}>
                <ImageContainer>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <StylishAvatar />
                  </motion.div>
                </ImageContainer>
              </Grid>
              <Grid item xs={12} md={7}>
                <TextContainer>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 600, 
                      color: theme.palette.primary.main,
                      mb: 3 
                    }}>
                      About Me
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ 
                      fontSize: '1.1rem', 
                      lineHeight: 1.8,
                      mb: 3
                    }}>
                      Passionate software engineering student from China, currently pursuing my degree at Mae Fah Luang University, Thailand. Specializing in web development and data engineering, I'm driven by innovation and the endless possibilities of technology.
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 2,
                      mt: 4,
                      justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        color="primary"
                        endIcon={<KeyboardArrowRightIcon />}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: '30px'
                        }}
                      >
                        Contact Me
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        endIcon={<KeyboardArrowRightIcon />}
                        onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
                        sx={{
                          px: 3,
                          py: 1,
                          borderRadius: '30px'
                        }}
                      >
                        Download Resume
                      </Button>
                    </Box>
                  </motion.div>
                </TextContainer>
              </Grid>
            </StyledGrid>
          </GlassCard>
        </Container>
      </ContentBox>
    </>
  )
}

export default Home