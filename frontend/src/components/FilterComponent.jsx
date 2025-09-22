const FilterComponent = ({ setFilter }) => {
  const setFilterInView = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="mb-4 flex space-x-2">
      <button
        onClick={() => setFilterInView("all")}
        className="btn btn-soft btn-info"
      >
        All
      </button>
      <button
        onClick={() => setFilterInView("active")}
        className="btn btn-soft btn-info"
      >
        Active
      </button>
      <button
        onClick={() => setFilterInView("completed")}
        className="btn btn-soft btn-info"
      >
        Completed
      </button>
    </div>
  );
};

export default FilterComponent;
