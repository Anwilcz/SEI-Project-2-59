import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CoinShow = () => {
  const [coin, setCoin] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=250&currency=USD')
        console.log(data.coins)
        const selected = (data.coins).filter(coin => coin.id === id)
        setCoin(selected[0])
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [id])

  return (
    <section className="section" >
      <div className="container">
        {coin ?
          <div className='card'>
            <div className='card-header is-full'>
              <h2 className="title has-text-centered">{coin.name}<span className='logo' role='img' aria-label='logo'>
                <figure className='icon'>
                  <img src={coin.icon} />
                </figure>
              </span></h2>
            </div>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <h4 className="title is-4">Rank</h4>
                <hr />
                <h4 className="title is-4">Price USD</h4>
                <hr />
                <h4 className="title is-4">% 24h</h4>
                <hr />
                <h4 className="title is-4">% 1h</h4>
                <hr />
                <h4 className="title is-4">% 7d</h4>
                <hr />
                <h4 className="title is-4">Market Cap</h4>
                <hr />
              </div>
              <div className="column is-half">
                <h4 className="title is-4">{`#${coin.rank}`}</h4>
                <hr />
                <h4 className="title is-4">{coin.price}</h4>
                <hr />
                <h4 className="title is-4">{coin.priceChange1d}</h4>
                <hr />
                <h4 className="title is-4">{coin.priceChange1h}</h4>
                <hr />
                <h4 className="title is-4">{coin.priceChange1w}</h4>
                <hr />
                <h4 className="title is-4">{coin.marketCap}</h4>
                <hr />
              </div>
            </div>
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Something has gone wrong.' : 'Loading...'}
          </h2>
        }
      </div>
    </section >
  )
}
export default CoinShow