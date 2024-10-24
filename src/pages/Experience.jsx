import React from 'react'
import { Typography, Box, Container, Grid, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import GlassCard from '../components/GlassCard'

const Experience = () => {
  const theme = useTheme()

  const projects = [
    {
      title: "Deep Learning Models for Coffee Bean Classification",
      type: "Independent Research",
      institution: "Mae Fah Luang University",
      supervisor: "Asst. Prof. Dr. Sujitra Arwatchananukul",
      duration: "Sep 2023 - Present",
      description: [
        "Developing an advanced computer vision system using PyTorch for automated coffee bean quality assessment",
        "Implementing and comparing multiple CNN architectures (DenseNet201, ResNet50d, EfficientNetV2, MobileNetV2) with cross-validation",
        "Utilizing advanced data augmentation techniques and implementing GradCAM visualization for model interpretability",
        "Achieving robust model performance through comprehensive evaluation metrics (ROC curves, confusion matrices, precision-recall curves)",
        "Applying best practices in deep learning: early stopping, learning rate scheduling, and model ensemble techniques"
      ],
      technologies: [
        "PyTorch",
        "OpenCV",
        "Albumentations",
        "scikit-learn",
        "timm (PyTorch Image Models)",
        "GradCAM"
      ],
      logo: "/images/mfu-logo.png"
    },
    {
      title: "Data Lake System Development",
      type: "Senior Project",
      institution: "Mae Fah Luang University",
      department: "Center for Information Technology Service",
      duration: "Sep 2023 - Present",
      description: [
        "Contributing to addressing data dispersion challenges by working closely with a four-member development team and the university's Digital Service department",
        "Assisting in various data engineering tasks, including data acquisition, cleaning, ELT operations, and managing data pipelines using Apache Airflow",
        "Playing a supporting role in overseeing data storage and retrieval for MySQL and SQL Server databases within the university's on-premise infrastructure"
      ],
      technologies: [
        "Apache Airflow",
        "MySQL",
        "SQL Server",
        "Python",
        "ETL Pipeline"
      ],
      logo: "/images/mfu-logo.png"
    }
  ]

  return (
    <>
      <Hero
        title="Experience"
        subtitle="Projects & Research"
      />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <GlassCard>
                  <Box sx={{ p: 4 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={3}>
                        <Box sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: { xs: 'center', md: 'flex-start' } 
                        }}>
                          <Box
                            component="img"
                            src={project.logo}
                            alt={project.institution}
                            sx={{
                              width: 80,
                              height: 80,
                              mb: 2,
                              borderRadius: '50%',
                              border: `2px solid ${theme.palette.primary.main}`
                            }}
                          />
                          <Typography variant="h6" gutterBottom>
                            {project.type}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.duration}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom color="text.secondary">
                          {project.institution}
                          {project.department && ` - ${project.department}`}
                        </Typography>
                        {project.supervisor && (
                          <Typography variant="subtitle2" gutterBottom color="text.secondary">
                            Supervisor: {project.supervisor}
                          </Typography>
                        )}
                        <Box sx={{ mt: 2 }}>
                          {project.description.map((desc, idx) => (
                            <Typography key={idx} variant="body2" paragraph>
                              • {desc}
                            </Typography>
                          ))}
                        </Box>
                        <Box sx={{ mt: 3 }}>
                          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                            Technologies Used:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {project.technologies.map((tech, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  px: 2,
                                  py: 0.5,
                                  borderRadius: '15px',
                                  fontSize: '0.875rem',
                                  bgcolor: theme.palette.mode === 'dark' 
                                    ? 'rgba(255, 255, 255, 0.05)' 
                                    : 'rgba(0, 0, 0, 0.05)',
                                }}
                              >
                                {tech}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Grid>
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

export default Experience