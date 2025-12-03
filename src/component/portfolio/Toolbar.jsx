function Toolbar({ filters, onSelectFilter, selected }) {
  return (
    <>
      <h3 className="title-1">Task-1</h3>
      <div className="filters">
        {filters.map((item) => {
          return (
            <div
              key={item}
              className={`btnFilter ${item === selected && 'black-wheat'}`}
              onClick={() => {onSelectFilter(item)}}
            >{item}</div>
          );
        })}
      </div>
    </>
  );
};

export default Toolbar;
