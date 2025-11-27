export default function IconSwitch ({ icon, onSwitch }) {
    return (
      <div className='divIcon material-icons' onClick={onSwitch}>
        {icon}
      </div>
    );
  }
  