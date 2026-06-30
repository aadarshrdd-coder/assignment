function CityList({ cities, countryId, stateId, onDeleteCity }) {
  return (
    <div className="city-list">
      {cities.map((city, index) => (
        <div key={`${city}-${index}`} className="city-row">
          <span className="city-name">{city}</span>
          <button
            className="btn-action btn-delete"
            id={`btn-delete-city-${stateId}-${index}`}
            onClick={() => onDeleteCity(countryId, stateId, city)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default CityList
