import React, { useState, useMemo, Suspense, lazy } from 'react'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'
import BackgroundAnimation from './components/BackgroundAnimation'
import ErrorBoundary from './components/ErrorBoundary'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Education = lazy(() => import('./pages/Education'))
const Experience = lazy(() => import('./pages/Experience'))
const Skills = lazy(() => import('./pages/Skills'))
const Contact = lazy(() => import('./pages/Contact'))

const App = () => {
  const [mode, setMode] = useState('dark')
  const location = useLocation()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                primary: { main: '#3f51b5' },
                secondary: { main: '#f50057' },
                background: { default: '#f5f5f5', paper: '#ffffff' },
              }
            : {
                primary: { main: '#90caf9' },
                secondary: { main: '#f48fb1' },
                background: { default: '#121212', paper: '#1e1e1e' },
              }),
        },
      }),
    [mode]
  )

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
          <BackgroundAnimation />
          <ScrollProgress />
          <Header toggleMode={toggleMode} mode={mode} />
          <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
            <Suspense fallback={<LoadingScreen />}>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Home />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </Box>
          <Footer />
          <ScrollToTop />
        </Box>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App