import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Exchanges = () => {

  const [exchanges, setExchanges] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.coinstats.app/public/v1/exchanges')
        setExchanges(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <>
      <section className='section'>
        <div className='container'>
          {exchanges ?
            <div className='columns is-multiline'>
              {exchanges.map(exchange => {
                console.log(exchange)
                return <div key={exchanges.supportedExchanges} className='column is-one-quarter-desktop is-one-third-tablet'>
                  <div className='card'>
                    <div className='card-header'>
                      <div className='card header-title'>{exchanges.supportedExchanges}</div>
                    </div>
                  </div>
                </div>
              })}
            </div>
            :
            <h2 className='title has-text-centered'>
              {hasError ? 'Something has gone wrong.' : 'Loading...'}
            </h2>
          }
        </div>
      </section>
    </>
  )
}

export default Exchanges
