import React from 'react';

import './spinner.css';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center" data-test="component-spinner">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

    // return (
    //     <div className="lds-css" data-test="component-spinner">
    //         <div className="lds-cube">
    //             <div/>
    //             <div/>
    //             <div/>
    //             <div/>
    //         </div>
    //         <style type="text/css">
    //
    //         </style>
    //     </div>
    // )
};

export default Spinner;