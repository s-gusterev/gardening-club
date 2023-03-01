import './Social.css';
import Instagram from '../../assets/images/icons/instagram.svg';
import VK from '../../assets/images/icons/vk.svg';
import YouTube from '../../assets/images/icons/youtube.svg';
const Social = () => {
  return (
    <div className='social'>
      <a href='#' className='social_link'>
        <img src={Instagram} alt='Instagram' />
      </a>
      <a href='#' className='social_link'>
        <img src={VK} alt='VK' />
      </a>
      <a href='#' className='social_link'>
        <img src={YouTube} alt='YouTube' />
      </a>
    </div>
  );
};

export default Social;
