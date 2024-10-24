import React from 'react'
import { Typography, Box, Container, Grid, LinearProgress, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import GlassCard from '../components/GlassCard'

const Skills = () => {
  const theme = useTheme()

  const skillsData = {
    'Machine Learning & Deep Learning': [
      { name: 'PyTorch', level: 'Intermediate', proficiency: 75 },
      { name: 'Computer Vision', level: 'Intermediate', proficiency: 75 },
      { name: 'Deep Learning', level: 'Intermediate', proficiency: 75 },
      { name: 'Data Preprocessing', level: 'Intermediate', proficiency: 80 },
      { name: 'Model Optimization', level: 'Intermediate', proficiency: 75 },
    ],
    'Data Engineering': [
      { name: 'Data Pipeline Development', level: 'Intermediate', proficiency: 75 },
      { name: 'ETL Processes', level: 'Intermediate', proficiency: 75 },
      { name: 'MySQL', level: 'Intermediate', proficiency: 75 },
      { name: 'SQL Server', level: 'Intermediate', proficiency: 75 },
    ],
    'Programming Languages': [
      { name: 'Python', level: 'Intermediate', proficiency: 80 },
      { name: 'SQL', level: 'Intermediate', proficiency: 75 },
      { name: 'JavaScript', level: 'Basic', proficiency: 50 },
      { name: 'TypeScript', level: 'Basic', proficiency: 45 },
    ],
    'Development Tools & Libraries': [
      { name: 'OpenCV', level: 'Intermediate', proficiency: 75 },
      { name: 'scikit-learn', level: 'Intermediate', proficiency: 75 },
      { name: 'Jupyter Notebooks', level: 'Intermediate', proficiency: 80 },
      { name: 'Git', level: 'Basic', proficiency: 60 },
      { name: 'Apache Airflow', level: 'Basic', proficiency: 50 },
    ],
    'Web Development': [
      { name: 'React.js', level: 'Basic', proficiency: 50 },
      { name: 'Node.js', level: 'Basic', proficiency: 45 },
      { name: 'HTML/CSS', level: 'Basic', proficiency: 55 },
    ],
  }

  return (
    <>
      <Hero
        title="Skills"
        subtitle="Technical Expertise & Proficiency"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <Grid item xs={12} key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <GlassCard>
                  <Box sx={{ p: 4 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        mb: 4,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {category}
                    </Typography>
                    <Grid container spacing={3}>
                      {skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={skill.name}>
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Box sx={{ mb: 3 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                  {skill.name}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: theme.palette.text.secondary,
                                    }}
                                  >
                                    {skill.proficiency}%
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: theme.palette.text.secondary,
                                      backgroundColor: theme.palette.mode === 'dark'
                                        ? 'rgba(255, 255, 255, 0.05)'
                                        : 'rgba(0, 0, 0, 0.05)',
                                      px: 1,
                                      py: 0.5,
                                      borderRadius: '12px',
                                      fontSize: '0.75rem',
                                      minWidth: '80px',
                                      textAlign: 'center',
                                    }}
                                  >
                                    {skill.level}
                                  </Typography>
                                </Box>
                              </Box>
                              <LinearProgress
                                variant="determinate"
                                value={skill.proficiency}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: theme.palette.mode === 'dark'
                                    ? 'rgba(255, 255, 255, 0.05)'
                                    : 'rgba(0, 0, 0, 0.05)',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 4,
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                  },
                                }}
                              />
                            </Box>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Skills