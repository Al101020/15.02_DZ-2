function Toolbar({ filters, onSelectFilter }) {

  return (
    <>
      <div className="Task-1">
        <h3 className="title-1">Task-1</h3>
        <div className="filters">
          {filters.map((item) => {
            return (
              <div
                key={item}
                className={item.replace(/\s/g, '-')}
                onClick={() => {
                  onSelectFilter(item);
                }}
              >{item}</div>
            );
          })}
        </div>
        <div className="titleFilter"></div>
        <div className="filteredList"></div>
      </div>
    </>
  );
};

export default Toolbar;