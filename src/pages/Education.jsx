import React, { useState } from 'react'
import { Typography, Box, Grid, Container, Button, Dialog, DialogTitle, DialogContent, DialogActions, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { styled } from '@mui/system'
import Hero from '../components/Hero'
import GlassCard from '../components/GlassCard'
import SchoolIcon from '@mui/icons-material/School'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DescriptionIcon from '@mui/icons-material/Description'

const StyledSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-16px',
    left: 0,
    width: '60px',
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    borderRadius: '2px',
  },
}))

const DetailItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

const DocumentButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '8px 20px',
  textTransform: 'none',
  fontWeight: 500,
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
  },
}))

function Education() {
  const theme = useTheme()
  const [openTranscript, setOpenTranscript] = useState(false)
  const [openScholarship, setOpenScholarship] = useState(false)
  const [openCertificate, setOpenCertificate] = useState(false)

  const educationData = {
    university: "Mae Fah Luang University",
    degree: "Bachelor of Science in Software Engineering",
    duration: "2021-2025",
    gpa: "3.87",
    location: "Chiang Rai, Thailand",
    achievements: [
      "Awarded the MFU Partial Scholarship for Outstanding Academic Performance in 2023",
      "Consistently maintaining excellent academic performance",
      "Active participation in university research projects"
    ],
    courses: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Web Development",
      "Machine Learning",
      "Software Engineering"
    ]
  }

  return (
    <>
      <Hero
        title="Education"
        subtitle="Academic Journey and Achievements"
      />
      <Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard>
                <Grid container spacing={4}>
                  <Grid item xs={12} md={4}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: { xs: 'center', md: 'flex-start' },
                      mb: { xs: 4, md: 0 }
                    }}>
                      <Box
                        component="img"
                        src="/images/mfu-logo.png"
                        alt="MFU Logo"
                        sx={{ 
                          width: 120,
                          height: 120,
                          mb: 2,
                          borderRadius: '50%',
                          border: `3px solid ${theme.palette.primary.main}`
                        }}
                      />
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {educationData.university}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {educationData.location}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <StyledSection sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        {educationData.degree}
                      </Typography>
                      <DetailItem>
                        <SchoolIcon color="primary" />
                        <Typography variant="body1">
                          {educationData.duration} | GPA: {educationData.gpa}
                        </Typography>
                      </DetailItem>
                    </StyledSection>

                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Key Achievements
                      </Typography>
                      {educationData.achievements.map((achievement, index) => (
                        <DetailItem key={index}>
                          <EmojiEventsIcon color="primary" fontSize="small" />
                          <Typography variant="body2">{achievement}</Typography>
                        </DetailItem>
                      ))}
                    </Box>

                    <Box sx={{ mb: 4 }}>
                      <Typography variant="h6" gutterBottom>
                        Key Courses
                      </Typography>
                      <Grid container spacing={1}>
                        {educationData.courses.map((course, index) => (
                          <Grid item key={index}>
                            <Box
                              sx={{
                                bgcolor: theme.palette.mode === 'dark' 
                                  ? 'rgba(255, 255, 255, 0.05)' 
                                  : 'rgba(0, 0, 0, 0.05)',
                                px: 2,
                                py: 0.5,
                                borderRadius: '15px',
                                fontSize: '0.875rem',
                              }}
                            >
                              {course}
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <DocumentButton
                        variant="contained"
                        startIcon={<DescriptionIcon />}
                        onClick={() => setOpenTranscript(true)}
                      >
                        View Transcript
                      </DocumentButton>
                      <DocumentButton
                        variant="contained"
                        startIcon={<EmojiEventsIcon />}
                        onClick={() => setOpenScholarship(true)}
                      >
                        View Scholarship
                      </DocumentButton>
                      <DocumentButton
                        variant="contained"
                        startIcon={<SchoolIcon />}
                        onClick={() => setOpenCertificate(true)}
                      >
                        View Certificate
                      </DocumentButton>
                    </Box>
                  </Grid>
                </Grid>
              </GlassCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Dialogs for documents */}
      <Dialog open={openTranscript} onClose={() => setOpenTranscript(false)} maxWidth="md" fullWidth>
        <DialogTitle>Academic Transcript</DialogTitle>
        <DialogContent>
          {/* Add your transcript content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenTranscript(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openScholarship} onClose={() => setOpenScholarship(false)} maxWidth="md" fullWidth>
        <DialogTitle>Scholarship Certificate</DialogTitle>
        <DialogContent>
          {/* Add your scholarship content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenScholarship(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openCertificate} onClose={() => setOpenCertificate(false)} maxWidth="md" fullWidth>
        <DialogTitle>Student Certificate</DialogTitle>
        <DialogContent>
          {/* Add your certificate content here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenCertificate(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Education