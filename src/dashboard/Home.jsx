import React from 'react'
import { DashboardHome } from '../components/styles'
import Charts from './Charts'
import DigitalLogBook from './DigitalLogBook'
import HomeContent from './HomeContent'


const Home = () => {
  return (
    <DashboardHome>
      <HomeContent/>
      <Charts/>
    </DashboardHome>
  )
}

export default Home