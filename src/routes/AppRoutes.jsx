import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Writtings from '../pages/Writtings'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="writtings" element={<Writtings />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default AppRoutes
