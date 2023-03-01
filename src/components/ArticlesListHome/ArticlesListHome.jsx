import './ArticlesListHome.css';
const ArticlesListHome = () => {
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
        <ul className='articles-home__articles-list'></ul>
      </div>
    </section>
  );
};

export default ArticlesListHome;
