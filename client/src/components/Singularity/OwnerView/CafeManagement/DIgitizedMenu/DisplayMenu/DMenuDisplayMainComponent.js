import React from 'react';
import DMenuDisplay from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/Components/DmenuDisplay.js';
import DMenuDisplayState from 'components/Singularity/OwnerView/CafeManagement/DIgitizedMenu/DisplayMenu/State/DMenuDisplayState.js';

const DMenuDisplayMainComponent = () => {
  return (
    <DMenuDisplayState>
      <DMenuDisplay />
    </DMenuDisplayState>
  );
};

export default DMenuDisplayMainComponent;
