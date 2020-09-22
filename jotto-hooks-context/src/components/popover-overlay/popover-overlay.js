import React from 'react';
import PropTypes  from 'prop-types';

import { Button, OverlayTrigger, Popover } from 'react-bootstrap';

const PopoverOverlay = ({ title, content, buttonText, placement }) => {
  const popover = (
    <Popover>
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>
        {content}
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger
      trigger="click"
      placement={placement}
      overlay={popover}
      rootClose
    >
      <Button className="tooltip-button">
        {buttonText}
      </Button>
    </OverlayTrigger>
  );
};

export default PopoverOverlay;

PopoverOverlay.propTypes = {
  title: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object
    ]),
  content: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object
    ]),
  buttonText: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object
    ]),
  placement: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.object
    ]),
}