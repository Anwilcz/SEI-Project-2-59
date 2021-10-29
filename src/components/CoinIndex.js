import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CoinCard from './CoinCard'
const CoinIndex = () => {

  const [coins, setCoins] = useState([])
  const [hasError, setHasError] = useState(false)
  const [sortPriceAscending, setSortPriceAscending] = useState(true)
  const [sortNameAscending, setSortNameAscending] = useState(true)
  const [sortSymbolAscending, setSortSymbolAscending] = useState(true)
  const [sortPriceChange24hAscending, setSortPriceChange24hAscending] = useState(true)
  const [sortPriceChange7dAscending, setSortPriceChange7dAscending] = useState(true)
  const [sortPriceBtcAscending, setSortPriceBtcAscending] = useState(true)
  const [sortVolumelAscending, setSortVolumeAscending] = useState(true)
  const [sortRankAscending, setSortRankAscending] = useState(true)
  const [sortedCoins, setSorted] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        let coinsData
        const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=250&currency=USD')
        coinsData = data.coins
        if (search !== '') {
          const regexSearch = new RegExp(search, 'i')
          coinsData = coinsData.filter(coin => regexSearch.test(coin.name))
        }
        setCoins(coinsData)
        setSorted(coinsData)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [search])


  function sortCoins(label) {
    let text = (label.innerText).split('')
    text.pop()
    text = text.join('').trim()
    console.log(text)

    const sortedCoins = [...coins]

    if (text === 'Price $') {
      setSortPriceAscending(!sortPriceAscending)
      sortPriceAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortPriceAscending ? sortedCoins.sort((a, b) => a.price - b.price) : sortedCoins.sort((a, b) => b.price - a.price)
    } else if (text === 'Rank') {
      setSortRankAscending(!sortRankAscending)
      sortRankAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortRankAscending ? sortedCoins.reverse() : sortedCoins.sort((a, b) => b.rank > a.rank)
    } else if (text === 'Name') {
      setSortNameAscending(!sortNameAscending)
      sortNameAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortNameAscending ? sortedCoins.sort((a, b) => (b.name).localeCompare(a.name)) : sortedCoins.sort((a, b) => (a.name).localeCompare(b.name))
    } else if (text === 'Symbol') {
      setSortSymbolAscending(!sortSymbolAscending)
      sortSymbolAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortSymbolAscending ? sortedCoins.sort((a, b) => (b.symbol).localeCompare(a.symbol)) : sortedCoins.sort((a, b) => (a.symbol).localeCompare(b.symbol))
    } else if (text === 'Price BTC') {
      setSortPriceBtcAscending(!sortPriceBtcAscending)
      sortPriceBtcAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortPriceBtcAscending ? sortedCoins.sort((a, b) => a.priceBtc - b.priceBtc) : sortedCoins.sort((a, b) => b.priceBtc - a.priceBtc)
    } else if (text === 'Price change 24h') {
      setSortPriceChange24hAscending(!sortPriceChange24hAscending)
      sortPriceChange24hAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortPriceChange24hAscending ? sortedCoins.sort((a, b) => a.priceChange1d - b.priceChange1d) : sortedCoins.sort((a, b) => b.priceChange1d - a.priceChange1d)
    } else if (text === 'Price change 7d') {
      setSortPriceChange7dAscending(!sortPriceChange7dAscending)
      sortPriceChange7dAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortPriceChange7dAscending ? sortedCoins.sort((a, b) => a.priceChange1w - b.priceChange1w) : sortedCoins.sort((a, b) => b.priceChange1w - a.priceChange1w)
    } else if (text === 'Volume $') {
      setSortVolumeAscending(!sortVolumelAscending)
      sortVolumelAscending ? label.innerText = `${text} ▲` : label.innerText = `${text} ▼`
      sortVolumelAscending ? sortedCoins.sort((a, b) => a.volume - b.volume) : sortedCoins.sort((a, b) => b.volume - a.volume)
    }
    setSorted(sortedCoins)
  }


  function handleTextInput(value) {
    console.log(value)
    setSearch(value)
  }

  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='header'>
            <p className='header-title'>Coin Index</p>
          </div>
          <div className='field'>
            <p className="control has-icons-left">
              <input onKeyUp={(event) => handleTextInput(event.target.value)} className="input" type="Search" placeholder="Search" />
              <span className="icon is-small is-left">
                <i className="fa fa-search" />
              </span>
            </p>
          </div>
          <div className='card'>
            <div className='card-header is-full'>
              <div onClick={(event) => sortCoins(event.target)} className='rank column bold small2'>Rank ▼</div>
              <div className='icons column is-narrow small'>Icon</div>
              <div onClick={(event) => sortCoins(event.target)} className='column symbol small'>Symbol ▲</div>
              <div onClick={(event) => sortCoins(event.target)} className='column coin small2'>Name ▲</div>
              <div onClick={(event) => sortCoins(event.target)} className='column small2'>Price $ ▼</div>
              <div onClick={(event) => sortCoins(event.target)} className='column small2'>Price BTC ▼</div>
              <div onClick={(event) => sortCoins(event.target)} className='column small2'>Price change 24h ▼</div>
              <div onClick={(event) => sortCoins(event.target)} className='column small2'>Price change 7d ▼</div>
              <div onClick={(event) => sortCoins(event.target)} className='column small2'>Volume $ ▼</div>
            </div>
            {sortedCoins.length ?
              <div className='container is-full'>
                {sortedCoins.map(coin => {
                  return (
                    <CoinCard key={coin.id} {...coin} />
                  )
                })}
              </div>
              :
              <h2 className='has-text-centered'>
                {hasError ? 'Something has gone wrong.' : 'Coin loading...'}
              </h2>
            }

          </div>
        </div>
      </section>
    </>
  )
}
export default CoinIndex