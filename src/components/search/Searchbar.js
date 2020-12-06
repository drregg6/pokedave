import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({
  fetchPokemonByType
}) => {
  const [ input, setInput ] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    fetchPokemonByType(input);

    setInput('');
  }

  return (
    <form
      className="flex"
      onSubmit={event => handleSubmit(event)}
    >
      <div className="flex-auto mr-2">
        <input
          className="py-1 px-2 w-full border-2 border-gray-500 focus:border-black"
          type="text"
          placeholder="Search by type"
          onChange={event => setInput(event.target.value)}
        />
      </div>
      <div className="ml-2">
        <button
          className="py-1 px-2 border-2 border-gray-500 hover:border-black hover:bg-black hover:text-white transition-all duration-75"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

Searchbar.propTypes = {
  fetchPokemonByType: PropTypes.func.isRequired,
}

export default Searchbar;