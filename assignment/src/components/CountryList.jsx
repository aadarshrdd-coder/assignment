import StateList from './StateList'

function CountryList({
  countries,
  onEditCountry,
  onDeleteCountry,
  onAddState,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity,
}) {
  return (
    <div className="country-list">
      {countries.map((country) => (
        <div key={country.id} className="country-card">
          {/* Country Row */}
          <div className="country-row">
            <span className="country-name">{country.name}</span>
            <div className="row-actions">
              <button
                className="btn-action btn-edit"
                id={`btn-edit-country-${country.id}`}
                onClick={() => onEditCountry(country.id)}
              >
                Edit
              </button>
              <button
                className="btn-action btn-delete"
                id={`btn-delete-country-${country.id}`}
                onClick={() => onDeleteCountry(country.id)}
              >
                Delete
              </button>
              <button
                className="btn-action btn-add"
                id={`btn-add-state-${country.id}`}
                onClick={() => onAddState(country.id)}
              >
                + State
              </button>
            </div>
          </div>

          {/* States */}
          <StateList
            states={country.states}
            countryId={country.id}
            onEditState={onEditState}
            onDeleteState={onDeleteState}
            onAddCity={onAddCity}
            onDeleteCity={onDeleteCity}
          />

          {/* No states placeholder */}
          {country.states.length === 0 && (
            <div className="empty-row">
              No states — add a state under this country.
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CountryList
