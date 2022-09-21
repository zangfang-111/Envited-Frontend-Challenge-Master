import images from '../../assets';
import { ImCalculator } from 'react-icons/im';

function EventCard ({ Icon, from, to, timezone }) {
  return (
    <div className='event-card'>
      <div className='event-card__details'>
        <div className='event-card__icon-wrapper'>
          <ImCalculator />
        </div>
        <div className='event-card__time'>
          <small>{from}</small>
          <small>to <strong>{to}</strong> {timezone}</small>
        </div>
      </div>
      <span onClick={() => console.log()}>
        <img src={images.ArrowRight} alt='Arrow Right - Envited' />
      </span>
    </div>
  );
}

export default EventCard;
