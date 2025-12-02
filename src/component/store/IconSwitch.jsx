export default function IconSwitch ({ isIcon, onSwitch }) {
  return (
    <div className={`divIcon ${isIcon ? 'material-icons' : 'icon-module'}`} onClick={onSwitch}>
      {`${isIcon ? 'view_list' : 'view_module'}`}
    </div>
  );
}
