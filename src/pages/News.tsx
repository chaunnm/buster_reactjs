import React, { useEffect, useState } from 'react';
import { newsApi } from '../api';

interface NewsArticleProps {
  item: {
    section: string;
    title: string;
    abstract: string;
    byline?: string;
    published_date: string;
    url: string;
    multimedia: { url: string }[];
  };
}

const NewsArticle: React.FC<NewsArticleProps> = ({ item }) => {
  return (
    <a
      href={item.url}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='newsArticle flex border-b-2 border-neutral-400 pb-7 my-7'>
        <img
          className='w-1/2'
          src={item.multimedia[0].url}
          alt='multimedia'
        ></img>
        <div className='news-detail leading-7 ml-4 mt-4'>
          <div className='news-section-name mb-5 uppercase text-[--main-color] font-bold'>
            {item.section}
          </div>
          <p className='news-title mb-3 text-white'>{item.title}</p>
          <div className='news-abstract mb-5 text-gray-400'>{item.abstract}</div>
          <div className='news-written '>
            {item.byline && (
              <div className='news-author text-main-color text-sm'>{item.byline}</div>
            )}
            <div className='news-date text-main-color text-s'>
              {item.published_date.slice(0, 10)}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

function News() {
  const [News, setNews] = useState<[]>([]);

  useEffect(() => {
    const getMovieNews = async () => {
      try {
        const response = await newsApi.getMovieNews();
        setNews(response.data.results);
      } catch (error: any) {
        console.error('Error fetching News', error.message);
      }
    };
    getMovieNews();
  }, [News]);

  return (
    <div className='news'>
      <div className='news-tittle text-center text-5xl py-5 font-medium'>Explore The News</div>

      <div className='news-container flex w-[90%] ml-8'>
        <div className='news-section font-medium flex-auto w-3/5'>
          {' '}
          <div className='news-category border-b-4 border-main-color text-4xl'>Lastest</div>
          <div className='news-posts'>
            {News &&
              News.map((item, i) => (
                <NewsArticle
                  key={i}
                  item={item}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
