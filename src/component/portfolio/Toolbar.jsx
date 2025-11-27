import btnBlWr from './btnBlWr.jsx';

function Toolbar({ filters, onSelectFilter }) {

  return (
    <>
      <h3 className="title-1">Task-1</h3>
      <div className="filters">
        {filters.map((item) => {
          return (
            <div
              key={item}
              className={item.replace(/\s/g, '-')}
              onClick={(e) => {
                btnBlWr(e);
                onSelectFilter(item);
              }}
            >{item}</div>
          );
        })}
      </div>
    </>
  );
};

export default Toolbar;