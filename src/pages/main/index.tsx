import { RUHUNT_DISCORD } from '../../constants';

import { ReactComponent as RuhuntLogo } from '../../assets/images/ruhuntwhite.svg';
import './style.css';

export const MainPage = () => {
  return (
    <div className='main'>
      <a href={RUHUNT_DISCORD} target='_blank' rel='noopener noreferrer' className='ruhunt-link'>
        <RuhuntLogo className='ruhunt-logo' />
        <span className='ruhunt-text'>discord link</span>
      </a>
    </div>
  );
};
