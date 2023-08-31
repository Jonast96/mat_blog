function Filters({ setTimeFilter, setDifficultyFilter, setTypeFilter }) {
  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTimeFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleDifficultyChange = (e) => {
    const value = e.target.value;
    setDifficultyFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleTypeChange = (e) => {
    const value = e.target.value;
    setTypeFilter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <div className="filter-container" id="tid">
        <h3>Tid</h3>
        <label>
          <input type="checkbox" value="0-15" onChange={handleTimeChange} />{" "}
          0-15 min
        </label>
        <label>
          <input type="checkbox" value="15-30" onChange={handleTimeChange} />{" "}
          15-30 min
        </label>
        <label>
          <input type="checkbox" value="30-60" onChange={handleTimeChange} />{" "}
          30-60 min
        </label>
        <label>
          <input type="checkbox" value="60-120" onChange={handleTimeChange} />{" "}
          60-120 min
        </label>
        <label>
          <input type="checkbox" value="over 120" onChange={handleTimeChange} />{" "}
          over 120 min
        </label>
      </div>

      <div className="filter-container" id="vansklighetsgrad">
        <h3>Vansklighetsgrad</h3>
        <label>
          <input
            type="checkbox"
            value="enkel"
            onChange={handleDifficultyChange}
          />{" "}
          Enkel
        </label>
        <label>
          <input
            type="checkbox"
            value="middels"
            onChange={handleDifficultyChange}
          />{" "}
          Middels
        </label>
        <label>
          <input
            type="checkbox"
            value="vanskelig"
            onChange={handleDifficultyChange}
          />{" "}
          Vanskelig
        </label>
      </div>

      <div className="filter-container" id="type">
        <h3>Type rett</h3>
        <label>
          <input type="checkbox" value="frokost" onChange={handleTypeChange} />{" "}
          Frokost
        </label>
        <label>
          <input type="checkbox" value="lunsj" onChange={handleTypeChange} />{" "}
          Lunsj
        </label>
        <label>
          <input type="checkbox" value="middag" onChange={handleTypeChange} />{" "}
          Middag
        </label>
        <label>
          <input type="checkbox" value="dessert" onChange={handleTypeChange} />{" "}
          Dessert
        </label>
      </div>
    </>
  );
}

export default Filters;
