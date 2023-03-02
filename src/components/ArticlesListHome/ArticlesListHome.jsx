import './ArticlesListHome.css';
const ArticlesListHome = () => {
  const articles = [
    {
      id: 1,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Дизайн ландшафта',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/400×300',
    },
    {
      id: 2,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Новости',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/400×400',
    },
    {
      id: 3,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Дизайн ландшафта',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/700×900',
    },
    {
      id: 4,
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      category: 'Дизайн ландшафта',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/600×560',
    },
    {
      id: 5,
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      category: 'Новости',
      date: '2020-01-01',
      body: 'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь. В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой могут все желающие. Любителям работы на приусадебных участках расскажут о том, как следить за своим здоровьем и как оказывать первую помощь.',
      image: 'https://source.unsplash.com/random/400×300',
    },
    {
      id: 6,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Дизайн ландшафта',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/700×800',
    },
    {
      id: 7,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Дизайн ландшафта',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/400×500',
    },
    {
      id: 8,
      title: 'Как выращивать фиолетовый картофель',
      category: 'Новости',
      date: '2020-01-01',
      body: 'Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель. Как выращивать фиолетовый картофель',
      image: 'https://source.unsplash.com/random/600×600',
    },
  ];

  return (
    <section className='articles-home'>
      <div className='articles-home__navigation'>
        <span className='articles-home__navigation-text'>Выбрать тему:</span>
        <div className='articles-home__navigation-buttons'>
          <button className='articles-home__button'>
            Уход за растениями и агротехника
          </button>
          <button className='articles-home__button'>Экология</button>
          <button className='articles-home__button'>Дизайн ландшафта</button>
          <button className='articles-home__button'>
            Льготы и гос. поддержка
          </button>
          <button className='articles-home__button'>Новости</button>
        </div>
      </div>
      <div className='articles-home__articles'>
        <ul className='articles-home__articles-list'>
          {articles.slice(0, 7).map((article) => (
            <li className='articles-home__articles-item' key={article.id}>
              <div className='articles-home__articles-image-container'>
                <img
                  className='articles-home__articles-image'
                  src={article.image}
                  alt={article.title}
                />
              </div>
              <div className='articles-home__articles-info'>
                <h3 className='articles-home__articles-category'>
                  {article.category}
                </h3>
                <span className='articles-home__articles-date'>
                  {article.date}
                </span>
              </div>
              <h3 className='articles-home__articles-heading'>
                {article.title}
              </h3>
              <p className='articles-home__articles-summary'>{article.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArticlesListHome;
