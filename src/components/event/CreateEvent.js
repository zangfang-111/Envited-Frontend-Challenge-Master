import { useState, useRef } from 'react';

import images from '../../assets';
import Button from '../common/Button';
import Input from '../common/Input';
import FileUpload from '../common/FileUpload';
import CustomModal from '../common/CustomModal';
import { eventsFields, initialState } from './utils';

function CreateEvent() {
  const [event, setEvent] = useState(initialState);  
  const [invalid, setInvalid] = useState(false);
  const [isOpenUpload, setIsOpenUpload] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);
  const fileRef = useRef(null);

  const handleImageChange = async () => {
    const files = fileRef.current?.files;

    if (files) {
      const formData = new FormData();
      formData.append('file', files[0]);
    }
  };

  function onChangeState (name, e) {
    setEvent({
      ...event,
      [name]: e.target.value
    })
  }

  function createEvent () {
    const invalidState = Object.values(event).filter(i => i === '').length > 0;

    setInvalid(invalidState);
    if (invalidState) return;

    window.location.replace('/event');
  }

  function onCancelEvent () {
    const progressing = Object.values(event).filter(i => i !== '').length > 0;

    if (progressing) setIsOpenCancel(true)
    else window.location.replace('/')
  }

  return (
    <div className='create-event'>
      <span className='create-event__cancel' onClick={() => onCancelEvent()}>
        Cancel
      </span>
      <h3 data-testid='page-title'>Create your event</h3>
      <div className='create-event-container'>
        <div className='create-event__state-fiels'>
          {eventsFields.map((item, k) => (
            <Input
              key={k}
              placeholder={item.placeholder}
              onChange={onChangeState}
              value={event[item.name]}
              name={item.name}
              invalid={invalid}
              classes={item.classes || ''}
            />
          ))}
        </div>
        <div className='create-event__upload-fields'>
          <div onClick={() => setIsOpenUpload(true)}>
            <img src={images.BirthdayCake} alt='Birthday Cake - Envited' />
          </div>
        </div>
      </div>
      <Button name='Next' action={createEvent} testId='create-event' />
      <CustomModal modalIsOpen={isOpenUpload} closeModal={() => setIsOpenUpload(false)}>
        <div className='file-upload-modal'>
          <FileUpload ref={fileRef} onInput={handleImageChange} />
          <p>Photos that are 1080 * 1080 work best</p>
        </div>
      </CustomModal>
      <CustomModal modalIsOpen={isOpenCancel} closeModal={() => setIsOpenCancel(false)}>
        <div className='event-cancel-modal'>
          <h3>🤔 Are you sure you want to cancel?</h3>
          <small>Your event will be gone forever!</small>
          <Button
            name='Cancel event'
            action={() => window.location.replace('/')}
            classes='btn-purple'
          />
          <Button
            name='Keep creating'
            action={() => setIsOpenCancel(false)}
            classes='btn-secondary'
          />
        </div>
      </CustomModal>
    </div>
  );
}

export default CreateEvent;
