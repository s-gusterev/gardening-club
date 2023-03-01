import './NewsList.css';

const NewsList = () => {
  const newsCard = [
    {
      id: 1,
      image: 'https://source.unsplash.com/random/400×300',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой. В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
    {
      id: 2,
      image: 'https://source.unsplash.com/random/500×500',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой... В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
    {
      id: 3,
      image: 'https://source.unsplash.com/random/400×400',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой... В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
    {
      id: 4,
      image: 'https://source.unsplash.com/random/600×500',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой... В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
    {
      id: 5,
      image: 'https://source.unsplash.com/random/500×300',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой... В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
    {
      id: 6,
      image: 'https://source.unsplash.com/random/600×700',
      title: 'В Тюмени открылась онлайн-школа «Здоровый садовод»',
      description:
        'В Тюменской области начались лекции онлайн-школы "Здоровый садовод", присоединиться к которой... В Тюмени открылась онлайн-школа «Здоровый садовод»',
    },
  ];

  return (
    <section className='news'>
      <h1 className='news__heading'>Новости</h1>
      <ul className='news__list'>
        {newsCard.slice(0, 5).map((item) => (
          <li className='news__item' key={item.id}>
            <div className='news__card-image-container'>
              <img
                className='news__card-image'
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className='news__card-text'>
              <h2 className='news__card-heading'>{item.title}</h2>
              <p className='news__card-summary'>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NewsList;
