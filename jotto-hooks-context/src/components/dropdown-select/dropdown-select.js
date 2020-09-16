import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, DropdownButton } from 'react-bootstrap';

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
            alt={`${name} icon`}
            src={image}
            width="32px"
            height="32px"
            className="mb-1 mr-2"
          /> :
          null
      }
      <span>{name}</span>
    </>
  );
};

/**
 * @param {Array} items - array of [{string} itemId, {JSX.element} item]
 * @param {number} selectedItemIdx
 * @param {function} onSelect
 * @returns {JSX.Element} dropdown element with icons
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