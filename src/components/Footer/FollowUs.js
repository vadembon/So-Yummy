import instagram from '../../images/footer/instagram.svg';
import facebook from '../../images/footer/facebook.svg';
import twitter from '../../images/footer/twitter.svg';
import youtube from '../../images/footer/youtube.svg';

export const FollowUs = () => {
  return (
    <ul>
      <li>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/">
          <img src={youtube} alt="youtube" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <img src={twitter} alt="twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="instagram" />
        </a>
      </li>
    </ul>
  );
};
