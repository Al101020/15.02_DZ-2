export default function IconSwitch ({ isIcon, onSwitch }) {
  return (
    <div className={`
      ${isIcon === true && 'divIcon material-icons'}
      ${isIcon === false && 'divIcon icon-module'}
    `} onClick={onSwitch}>
      {`
      ${isIcon === true && 'view_list'}
      ${isIcon === false && 'view_module'}
      `}
    </div>
  );
}
