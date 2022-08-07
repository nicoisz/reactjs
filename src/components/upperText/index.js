import clock from '../../images/icons/iconmonstr-time-2_2@3x.png';

export const UpperText = () => (
  <div className="top-elements">
    <img className="clock" src={clock} />
    <span className="hours-ago-by-autho Text-Style-2">
      2 hours ago by author
    </span>
  </div>
);
