import React, { useState } from 'react';

const PageContent = ({ page }) => {

  return (
    <div>
      {page.component}
    </div>
  );
};

export default PageContent;
