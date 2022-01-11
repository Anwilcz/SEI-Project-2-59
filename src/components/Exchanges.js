import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  // const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      // try {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/exchanges')
      setExchanges(data.supportedExchanges)
      // } catch (err) {
      //   setHasError(true)
      // }
    }
    getData()
  }, [])

  return (
    <section className='section'>
      <div className='container'>
      <div className='header'>
        <p className='header-title'>Exchanges</p>
      </div>
        <div className='columns is-multiline'>
          {exchanges.map(exchange => {
            console.log('exchange', exchange)
            return <div key={exchanges.supportedExchanges} className='column is-one-quarter-desktop is-one-third-tablet'>
              <div className='card'>
                <div className='card-header'>
                  <div className='card header-title'>{exchanges.supportedExchanges}</div>
                  <hr />
                </div>
                <div className='card-content'>
                  <h5>{exchange}</h5>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
export default Exchanges