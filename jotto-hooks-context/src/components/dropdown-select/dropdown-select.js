import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownButton } from 'react-bootstrap';
import './dropdown-select.css';

/**
 * @param {string} image
 * @param {string} name
 * @returns {JSX.Element} for Dropdown item
 */
const ItemView = ({ image, name }) => {
  return (
    <>
      {
        image ?
          <img
            alt={`${name}`}
            src={image}
            width="32px"
            height="32px"
          /> :
          null
      }
      <span className="dropdown-text">{name}</span>
    </>
  );
};

/**
 * @typedef item
 * @type {object}
 * @property {string} id - an item ID.
 * @property {string} name - item name that displays in dropdown.
 * @property {string|object} image - image src.
 *
 * @param {Array<item>} items - array of item objects
 * @callback {function} onSelect - fires on item selection with selected id
 * @param {number} selectedItemIdx - index in items Array that corresponds the default item
 *
 * @returns {JSX.Element} Dropdown
 */
const DropdownSelect = ({ items, selectedItemIdx, onSelect }) => {
  const { id: selectedId, name: selectedName, image: selectedImage } = items[selectedItemIdx];
  const dropdownItems = items.map(({ id, name, image }) =>
    <Dropdown.Item
      data-test={`item-${id}`}
      key={id}
      eventKey={id}
      active={id === selectedId}
      onSelect={() => onSelect(id)}
    >
      <ItemView name={name} image={image} />
    </Dropdown.Item>
  );

  return (
    // renderMenuOnMount for testing!
    <DropdownButton
      title={<ItemView name={selectedName} image={selectedImage} />}
      size="lg"
      renderMenuOnMount
    >
      {dropdownItems}
    </DropdownButton>
  );
};

DropdownSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  })).isRequired,
  selectedItemIdx: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default DropdownSelect;