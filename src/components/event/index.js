import images from '../../assets';
import EventCard from '../common/EventCard';
import LocationCard from '../common/LocationCard';

function EventLayout() {
  return (
    <div className='ev-layout'>
      <div className='ev-layout__container'>
        <div className='ev-layout__events-wrapper'>
          <div className='ev-layout__title'>
            <h3>Birthday Bash</h3>
            <small>Hosted by <strong>Elysia</strong></small>
          </div>
          <EventCard
            from='18 August 6:00PM'
            to='19 August 1:00PM'
            timezone='UTC + 10'
          />
          <LocationCard
            street='Street name'
            sub='Suburb'
            state='State'
            code='Postcode'
          />
        </div>
        <div className='ev-layout__img-wrapper'>
          <img src={images.BirthdayCake} alt='Birthday Cake - Envited' />
        </div>
      </div>
    </div>
  );
}

export default EventLayout;
