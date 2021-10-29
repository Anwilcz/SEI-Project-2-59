import React from 'react'
import { Link } from 'react-router-dom'
const CoinCard = ({ id, name, symbol, price, rank, icon, priceChange1d, priceChange1w, volume, priceBtc }) => {
  return (
    <>
      <Link key={id} className='coin-index-card' to={`/coins/${id}`}>
        <div className='rank column col70px bold'>#{rank}</div>
        <div className='icons column is-narrow '><img className='icon is-small' src={icon} /></div>
        <div className='column symbol'>{symbol}</div>
        <div className='column coin'>{name}</div>
        <div className='column'>{price.toFixed(6)}</div>
        <div className='column'>{priceBtc.toFixed(6)}</div>
        <div className={priceChange1w >= 0 ? 'column has-text-left text-green' : 'column has-text-left text-red'}>{priceChange1d} %</div>
        <div className={priceChange1w >= 0 ? 'column has-text-left text-green' : 'column has-text-left text-red'}>{priceChange1w} %
        </div>
        <div className='column'>{Math.round(volume)}</div>
      </Link>
      <hr />
    </>
  )
}
export default CoinCard