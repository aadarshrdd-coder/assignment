import CityList from './CityList'

function StateList({
  states,
  countryId,
  onEditState,
  onDeleteState,
  onAddCity,
  onDeleteCity,
}) {
  return (
    <div className="state-list">
      {states.map((state) => (
        <div key={state.id} className="state-card">
          {/* State Row */}
          <div className="state-row">
            <span className="state-name">{state.name}</span>
            <div className="row-actions">
              <button
                className="btn-action btn-edit"
                id={`btn-edit-state-${state.id}`}
                onClick={() => onEditState(countryId, state.id)}
              >
                Edit
              </button>
              <button
                className="btn-action btn-delete"
                id={`btn-delete-state-${state.id}`}
                onClick={() => onDeleteState(countryId, state.id)}
              >
                Delete
              </button>
              <button
                className="btn-action btn-add"
                id={`btn-add-city-${state.id}`}
                onClick={() => onAddCity(countryId, state.id)}
              >
                + City
              </button>
            </div>
          </div>

          {/* Cities */}
          <CityList
            cities={state.cities}
            countryId={countryId}
            stateId={state.id}
            onDeleteCity={onDeleteCity}
          />

          {/* No cities placeholder */}
          {state.cities.length === 0 && (
            <div className="empty-row empty-row--city">
              No cities in this state.
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StateList
