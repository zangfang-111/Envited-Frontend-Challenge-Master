import { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { eventsFields, locationFields } from './utils';

function CreateEvent() {
  const [state, setState] = useState({
    eventName: '',
    hostName: '',
    startTime: '',
    endTime: '',
  });
  const [location, setLocation] = useState({
    street: '',
    suburb: '',
    state: '',
    postcode: '',
  });
  
  const [invalid, setInvalid] = useState(false);

  function onChangeState (name, e) {
    setState({
      ...state,
      [name]: e.target.value
    })
  }

  function onChangeLocation (name, e) {
    setLocation({
      ...location,
      [name]: e.target.value
    })
  }

  function createEvent () {
    const invalidState = Object.values(state).filter(i => i === '').length > 0;
    const invalidLocation = Object.values(location).filter(i => i === '').length > 0;

    setInvalid(invalidState && invalidLocation);
    if (invalidState && invalidLocation) return;

    window.location.replace('/event');
  }

  return (
    <div className='create-event'>
      <h3>🎉 Create your amazing event!</h3>
      <div className='create-event-container'>
        <div className='create-event__state-fiels'>
          {eventsFields.map((item, k) => (
            <Input
              key={k}
              placeholder={item.placeholder}
              onChange={onChangeState}
              value={state[item.name]}
              name={item.name}
              invalid={invalid}
            />
          ))}
          <small>TODO: file upload for event photo</small>
        </div>
        <div className='create-event__location-fields'>
          {locationFields.map((item, k) => (
            <Input
              key={k}
              placeholder={item.placeholder}
              onChange={onChangeLocation}
              value={location[item.name]}
              name={item.name}
              invalid={invalid}
            />
          ))}
          <Button name='Next' action={createEvent} />
        </div>
      </div>
    </div>
  );
}

export default CreateEvent;
