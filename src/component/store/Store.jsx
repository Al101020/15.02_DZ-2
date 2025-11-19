import React, {useState} from 'react';
import './Store.css';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className='icon' onClick={onSwitch} style={{ cursor: 'pointer' }}>
      <span className="material-icons">
        {icon ? 'view_list' : 'view_module'}
      </span>
    </div>
  );
};

function Store() {
  const [listView, setListView] = useState(true);

  const switchingView = () => {
    // view_list(!view_module) 
    // подсмотрел было так:const toggleView = () => {setIsListView(!isListView);};

    console.log('!!!!!!!');
  };
  
  return (
    <>
      <div className="Task-2">
        <h3 className="title-2">Task-2</h3>
        <IconSwitch icon={"view_list"} onSwitch={switchingView}/>
        <div className="list-products"></div>
      </div>
    </>
  );
}

export default Store

// const IconSwitch = ({ icon, onSwitch }) => {
//   return (
//     <div className='icon' onClick={onSwitch} style={{ cursor: 'pointer' }}>
//         <span className="material-icons">
//             {icon ? 'view_list' : 'view_module'}
//         </span>
//     </div>
//   );
// };

// export default IconSwitch;