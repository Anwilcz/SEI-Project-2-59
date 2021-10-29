import React from 'react'

const FeatureCard = ({ coins, name }) => {





  function getTrending(coins) {
    getBigGainers(coins)
    const trending = new Array
    for (let i = 0; i < 5; i++) {
      if (coins[i].rank === i + 1) {
        trending.push(coins[i])
      }
    }
    trending.unshift({
      id: 'trending_labels',
      rank: 'R',
      icon: 'Sym.',
      name: 'Name',
      price: 'Price',
    })
    return (

      trending.map(coin => {
        return (
          <div key={coin.id} className='columns'>
            <div className='rank column is-narrow bold'>{coin === trending[0] ? <small className='small'>Rank</small> : `#${coin.rank}`}</div>
            <div className='icons column is-narrow '>{coin === trending[0] ? <small className='small'>{coin.icon}</small> : <img className='icon is-small' src={coin.icon} />}</div>
            <div className='column coin'>{coin === trending[0] ? <small className='small'>Name</small> : coin.name}</div>
            <div className='column price'>{coin === trending[0] ? <small className='small'>Price</small> : coin.price.toFixed(2) + '$'}</div>
          </div>
        )
      })
    )
  }

  function getBigGainers(coins) {
    const selected = coins.filter(coin => 'priceChange1d' in coin && coin.volume >= 500000)
    const bigGainers = new Array
    console.log(selected)

    while (bigGainers.length < 5) {
      let maxGainer = selected[0]

      for (let i = 0; i < selected.length; i++) {
        if (selected[i].priceChange1d > maxGainer.priceChange1d && !bigGainers.includes(selected[i])) {
          maxGainer = selected[i]
        }
      }
      bigGainers.push(maxGainer)
    }
    bigGainers.unshift({
      id: 'biggainers_labels',
      rank: 'R',
      icon: 'Sym.',
      name: 'Name',
      price: '% Price Change 24h',
    })

    return (
      bigGainers.map(coin => {
        return (
          <div key={coin.id} className='columns'>
            <div className='rank column col70px bold'>{coin === bigGainers[0] ? <small className='small'>Rank</small> : `#${bigGainers.indexOf(coin)}`}</div>
            <div className='icons column is-narrow '>{coin === bigGainers[0] ? <small className='small'>{coin.icon}</small> : <img className='icon is-small' src={coin.icon} />}</div>
            <div className='column coin'>{coin === bigGainers[0] ? <small className='small'>Name</small> : coin.name}</div>
            <div className='column price'>{coin === bigGainers[0] ? <small className='small'>Price Change 24h</small> : coin.priceChange1d.toFixed(2) + '%' }</div>
          </div>
        )
      })
    )
  }

  function getHighestVolume(coins) {
    const selected = coins.filter(coin => 'volume' in coin)
    const highestVolumeCoins = new Array

    while (highestVolumeCoins.length < 5) {
      let highestVolume = selected.find(coin => !highestVolumeCoins.includes(coin))
      for (let i = 0; i < selected.length; i++) {
        if ((selected[i].volume > highestVolume.volume) && !highestVolumeCoins.includes(selected[i])) {
          highestVolume = selected[i]
        }
      }
      highestVolumeCoins.push(highestVolume)
    }
    highestVolumeCoins.unshift({
      id: 'highestvolume_labels',
      rank: 'R',
      icon: 'Sym.',
      name: 'Name',
      price: 'Global market 24h volume',
    })
    console.log(highestVolumeCoins)
    return (
      highestVolumeCoins.map(coin => {
        return (
          <div key={coin.id} className='columns'>
            <div className='rank column col70px bold'>{coin === highestVolumeCoins[0] ? <small className='small'>Rank</small> : `#${highestVolumeCoins.indexOf(coin)}`}</div>
            <div className='icons column is-narrow '>{coin === highestVolumeCoins[0] ? <small className='small'>{coin.icon}</small> : <img className='icon is-small' src={coin.icon} />}</div>
            <div className='column coin'>{coin === highestVolumeCoins[0] ? <small className='small'>Name</small> : coin.name}</div>
            <div className='column price'>{coin === highestVolumeCoins[0] ? <small className='small'>Total volume 24h</small> : Math.round(coin.volume) + '$' }</div>
          </div>
        )
      })
    )
  }

  return (
    <div className='column is-one-third-desktop is-full-tablet is-full-mobile'>
      <div className='card'>
        <div className='card-header-title'>
          <p className='title is-4'>
            <span className='icon is-small'>
              {name === 'Trending' && <svg viewBox="0 0 512 512"><path fill='#1250BC' d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path></svg>}
              {name === 'Big gainers' && <svg viewBox="0 0 512 512"><path fill='#1250BC' d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path></svg>}
              {name === 'Highest volume' && <svg viewBox="0 0 512 512"><path fill='#1250BC' d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"/></svg>}            
            </span>
            {name}
          </p>
        </div>
        <div className='card-content'>
          {name === 'Trending' && getTrending(coins)}
          {name === 'Big gainers' && getBigGainers(coins)}
          {name === 'Highest volume' && getHighestVolume(coins)}
        </div>
      </div>
    </div>

  )
}
export default FeatureCard
