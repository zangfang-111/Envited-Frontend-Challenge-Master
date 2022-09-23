import images from '../../assets';
import Button from '../common/Button';

function LandingLayout() {
  return (
    <div className='ld-layout'>
      <div className='ld-layout__container'>
        <Button
          classes='is-hidden-desktop'
          name='🎉 Create my event'
          action={() => window.location.replace('/create')}
        />
        <div className='ld-layout__img-wrapper'>
          <img src={images.LandingPageImg} alt='Landing Page - Envited' />
        </div>
        <div className='ld-layout__desc-wrapper'>
          <div className='ld-layout__title'>
            <h2>Imagine if</h2>
            <h2><span>Snapchat</span></h2>
            <h2>had events.</h2>
          </div>
          <p>
            Easily host and share events with your friends
            across any social media.
          </p>
          <Button
            classes='is-hidden-tablet'
            name='🎉 Create my event'
            action={() => window.location.replace('/create')}
            testId='create-event'
          />
        </div>
      </div>
    </div>
  );
}

export default LandingLayout;
