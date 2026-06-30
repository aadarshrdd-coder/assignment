import { useState } from 'react'
import CountryList from './components/CountryList'
import './App.css'

function App() {
  const [countries, setCountries] = useState([
    {
      id: 1,
      name: 'Renamed Country',
      states: [
        {
          id: 1,
          name: 'Karnataka',
          cities: ['Bengaluru', 'Mysuru', 'Atlas City'],
        },
        {
          id: 2,
          name: 'Atlas State',
          cities: [],
        },
      ],
    },
    {
      id: 2,
      name: 'Atlas Country',
      states: [],
    },
  ])

  const [nextId, setNextId] = useState(100)

  const getNextId = () => {
    const id = nextId
    setNextId((prev) => prev + 1)
    return id
  }

  // ── Country handlers ────────────────────────────────────────
  const handleAddCountry = () => {
    const name = prompt('Enter country name:')
    if (!name || !name.trim()) return
    setCountries((prev) => [
      ...prev,
      { id: getNextId(), name: name.trim(), states: [] },
    ])
  }

  const handleEditCountry = (countryId) => {
    const country = countries.find((c) => c.id === countryId)
    if (!country) return
    const newName = prompt('Edit country name:', country.name)
    if (!newName || !newName.trim()) return
    if (!window.confirm(`Rename "${country.name}" to "${newName.trim()}"?`)) return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId ? { ...c, name: newName.trim() } : c
      )
    )
  }

  const handleDeleteCountry = (countryId) => {
    const country = countries.find((c) => c.id === countryId)
    if (!country) return
    if (
      !window.confirm(
        `Delete country "${country.name}"?\nThis will also delete all its states and cities.`
      )
    )
      return
    setCountries((prev) => prev.filter((c) => c.id !== countryId))
  }

  // ── State handlers ──────────────────────────────────────────
  const handleAddState = (countryId) => {
    const name = prompt('Enter state name:')
    if (!name || !name.trim()) return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: [
                ...c.states,
                { id: getNextId(), name: name.trim(), cities: [] },
              ],
            }
          : c
      )
    )
  }

  const handleEditState = (countryId, stateId) => {
    const country = countries.find((c) => c.id === countryId)
    const state = country?.states.find((s) => s.id === stateId)
    if (!state) return
    const newName = prompt('Edit state name:', state.name)
    if (!newName || !newName.trim()) return
    if (!window.confirm(`Rename "${state.name}" to "${newName.trim()}"?`)) return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId ? { ...s, name: newName.trim() } : s
              ),
            }
          : c
      )
    )
  }

  const handleDeleteState = (countryId, stateId) => {
    const country = countries.find((c) => c.id === countryId)
    const state = country?.states.find((s) => s.id === stateId)
    if (!state) return
    if (
      !window.confirm(
        `Delete state "${state.name}"?\nThis will also delete all its cities.`
      )
    )
      return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? { ...c, states: c.states.filter((s) => s.id !== stateId) }
          : c
      )
    )
  }

  // ── City handlers ───────────────────────────────────────────
  const handleAddCity = (countryId, stateId) => {
    const name = prompt('Enter city name:')
    if (!name || !name.trim()) return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId
                  ? { ...s, cities: [...s.cities, name.trim()] }
                  : s
              ),
            }
          : c
      )
    )
  }

  const handleDeleteCity = (countryId, stateId, cityName) => {
    if (!window.confirm(`Delete city "${cityName}"?`)) return
    setCountries((prev) =>
      prev.map((c) =>
        c.id === countryId
          ? {
              ...c,
              states: c.states.map((s) =>
                s.id === stateId
                  ? { ...s, cities: s.cities.filter((city) => city !== cityName) }
                  : s
              ),
            }
          : c
      )
    )
  }

  return (
    <div className="app-wrapper">
      <div className="app-container">
        {/* Header */}
        <div className="app-header">
          <h1 className="app-title">Geo ledger</h1>
          <p className="app-subtitle">Country → State → City (CRUD, prompts &amp; confirms)</p>
        </div>

        {/* Add Country Button */}
        <div className="top-actions">
          <button className="btn-add-country" id="btn-add-country" onClick={handleAddCountry}>
            + Add country
          </button>
        </div>

        {/* Country List */}
        <CountryList
          countries={countries}
          onEditCountry={handleEditCountry}
          onDeleteCountry={handleDeleteCountry}
          onAddState={handleAddState}
          onEditState={handleEditState}
          onDeleteState={handleDeleteState}
          onAddCity={handleAddCity}
          onDeleteCity={handleDeleteCity}
        />
      </div>
    </div>
  )
}

export default App
