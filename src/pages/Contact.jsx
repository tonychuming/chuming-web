import React from 'react'
import { Typography, Box, Container, Grid, useTheme, TextField, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'
import Hero from '../components/Hero'
import GlassCard from '../components/GlassCard'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

const ContactSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
}))

const ContactInfo = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

const IconBox = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.mode === 'dark' 
    ? 'rgba(255, 255, 255, 0.1)' 
    : 'rgba(0, 0, 0, 0.05)',
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(0, 0, 0, 0.02)',
    borderRadius: '12px',
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}))

const Contact = () => {
  const theme = useTheme()

  const contactDetails = [
    {
      icon: <EmailIcon />,
      title: 'Email',
      details: [
        '6431503116@lamduan.mfu.ac.th',
        'tonychuming30@gmail.com'
      ]
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone',
      details: ['+66 93-120-3988']
    },
    {
      icon: <LocationOnIcon />,
      title: 'Location',
      details: ['Mae Fah Luang University', 'Chiang Rai, Thailand']
    }
  ]

  return (
    <>
      <Hero
        title="Contact Me"
        subtitle="Let's Connect"
      />
      <ContactSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard>
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 600,
                      mb: 4,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Get in Touch
                    </Typography>
                    
                    {contactDetails.map((contact, index) => (
                      <ContactInfo key={index}>
                        <IconBox>
                          {contact.icon}
                        </IconBox>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {contact.title}
                          </Typography>
                          {contact.details.map((detail, idx) => (
                            <Typography 
                              key={idx} 
                              variant="body2" 
                              color="text.secondary"
                              sx={{ lineHeight: 1.6 }}
                            >
                              {detail}
                            </Typography>
                          ))}
                        </Box>
                      </ContactInfo>
                    ))}
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <GlassCard>
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 600,
                      mb: 4,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Send Message
                    </Typography>

                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      <StyledTextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                      />
                      <StyledTextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                      />
                      <StyledTextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                      />
                      <StyledTextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                      />
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          borderRadius: '12px',
                          py: 1.5,
                          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          boxShadow: 'none',
                          '&:hover': {
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </Box>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </ContactSection>
    </>
  )
}

export default Contact