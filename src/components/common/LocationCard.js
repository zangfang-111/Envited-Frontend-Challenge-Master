import images from '../../assets';
import { ImLocation2 } from 'react-icons/im';

function EventCard ({ street, sub, state, code }) {
  return (
    <div className='event-card'>
      <div className='event-card__details'>
        <div className='event-card__icon-wrapper'>
          <ImLocation2 />
        </div>
        <div className='event-card__time'>
          <small>{street}</small>
          <small>{sub}, {state}, {code}</small>
        </div>
      </div>
      <span onClick={() => console.log()}>
        <img src={images.ArrowRight} alt='Arrow Right - Envited' />
      </span>
    </div>
  );
}

export default EventCard;
