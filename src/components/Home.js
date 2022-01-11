import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FeatureCard from './FeatureCard'
import News from './News'


const Home = () => {
  const [coins, setCoins] = useState([])


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=250&currency=USD')
      setCoins(data.coins)
    }
    getData()
  }, [])

  return (
    <section className='section'>
      <div className='container'>
        <div className='hero has-text-centered'>
          <h1 className='main-title'>Welcome to the CryptoZone</h1>
        </div>
        <div className='columns is-multiline is-10 is-centered'>
          <p className='header-title'>Crypto rankings</p>
          {coins.length ? <FeatureCard coins={coins} name='Trending' /> : 'Loading...'}
          {coins.length ? <FeatureCard coins={coins} name='Big gainers' /> : 'Loading...'}
          {coins.length ? <FeatureCard coins={coins} name='Highest volume' /> : 'Loading...'}
          <p className='header-title'>Crypto news</p>
          <News />
        </div>
      </div>
    </section>
  )
}
export default Home