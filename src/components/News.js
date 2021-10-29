import React, { useEffect, useState } from 'react'
import axios from 'axios'

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20')
      setNews(data.news)
    }
    getNews()
  }, [])

  function displayNews() {
    return (
      <>
        {news.map(article => {
          if (news.indexOf(article) < 3) {
            return (
              <div key={article.name} className='card column is-one-third'>
                <div className='card-header-title'>
                  <p className='title is-6'>
                    {article.title}
                    <span className='subtitle is-7 .small'>
                      <br />
                      {article.source}
                    </span>
                  </p>
                </div>
                <div className='columns card-content'>
                  <div className='news-image column is-one-third'>
                    <img className='' src={article.imgURL} />
                  </div>
                  <div className='column news-content'>
                    <p className='subtitle is-7 '>
                      {article.description} 
                      <a href={article.link} className='is-7 title'> .. ➤ Read more</a>
                    </p>
                  </div>
                </div>
              </div>
            )
          }
        })}

      </>
    )
  }

  return (
    <div className='column is-full-desktop is-full-tablet is-full-mobile'>
      <div className='card column is-full'>
        <div className='columns'>
          {displayNews()}
        </div>
      </div>
    </div>

  )
}
export default News