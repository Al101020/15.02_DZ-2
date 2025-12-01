export default function IconSwitch ({ isIcon, onSwitch }) {
  return (
    <div className={`
      ${isIcon === 'view_list' && 'divIcon material-icons'}
      ${isIcon === 'view_module' && 'divIcon icon-module'}
    `} onClick={onSwitch}>
      {`${isIcon}`}
    </div>
  );
}
