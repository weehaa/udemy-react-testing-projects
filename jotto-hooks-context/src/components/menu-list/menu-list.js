import React from 'react';
import PropTypes from 'prop-types';

import PopoverOverlay from '../popover-overlay';

import { useLangStrings } from '../../contexts/language-context';

import './menu-row.scss';

/**
 *
 * @param {string} label
 * @param {JSX.Element} menuItem
 * @param {string} hint
 * @returns {JSX.Element}
 * @constructor
 */
const MenuRow = ({ label, menuItem, hint }) => {
  const menuStrings = useLangStrings()['menuStrings'];
  const renderHint = () => {
    if (!menuStrings[hint]) return null;
    return (
      <>
        <PopoverOverlay
          title={
            menuStrings[hint]['title']
          }
          content=
            <div dangerouslySetInnerHTML={{ __html: menuStrings[hint]['content'] }}/>
          buttonText={<i>i</i>}
          placement="left"
        />
      </>
    );
  };

  return (
    <tr
      key={label}
      data-test="component-menu-row"
      className="menu-row"
    >
      <td
        data-test="menu-label"
        className="menu-label"
      >
        {menuStrings.labels[label]}
      </td>
      <td
        data-test="menu-item"
        className="menu-item"
      >
        {menuItem}
      </td>
      <td
        data-test="menu-hint"
        className="menu-hint"
      >
        {renderHint()}
      </td>
    </tr>
  );
};

MenuRow.propTypes = {
  label: PropTypes.string.isRequired,
  menuItem: PropTypes.node.isRequired,
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

const MenuList = ({ menuRowComponents }) => {

  return (
    <table
      data-test="component-menu-list"
      className="menu-list"
    >
      <tbody>
      {
        menuRowComponents.map(({ label, menuItem, hint }) =>
          <MenuRow
            key={label}
            data-test="menu-list-row"
            label={label}
            menuItem={menuItem}
            hint={hint}/>)
      }
      </tbody>
    </table>
  );
};

MenuList.propTypes = {
  menuRowComponents: PropTypes.arrayOf(PropTypes.object),
};

export { MenuRow };
export default MenuList;

