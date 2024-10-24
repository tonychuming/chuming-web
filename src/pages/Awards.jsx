import React from 'react'
import { Typography, Box, Card, CardContent, Grid } from '@mui/material'
import { motion } from 'framer-motion'

const MotionCard = motion(Card)

function Awards() {
  const awardsData = [
    {
      title: "Outstanding Student Award",
      organization: "Mae Fah Luang University, School of Information Technology",
      year: "2022",
      description: "Awarded for excellent academic performance and active participation in university activities."
    },
    {
      title: "First Place, University Hackathon",
      organization: "Mae Fah Luang University",
      year: "2021",
      description: "Led a team to develop an innovative campus service application, winning first place in a 48-hour competition."
    },
    {
      title: "Dean's List",
      organization: "Mae Fah Luang University",
      year: "2018-2022",
      description: "Consistently maintained excellent academic performance, being named to the Dean's List for four consecutive years."
    }
  ]

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Awards and Achievements
      </Typography>
      <Grid container spacing={3}>
        {awardsData.map((award, index) => (
          <Grid item xs={12} key={index}>
            <MotionCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {award.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {award.organization} | {award.year}
                </Typography>
                <Typography variant="body2">
                  {award.description}
                </Typography>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Awards