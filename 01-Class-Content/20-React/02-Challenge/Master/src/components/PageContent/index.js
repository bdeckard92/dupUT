import React, { useState } from 'react';

const PageContent = ({ page }) => {

  // const [pages] = useState([
  //   {
  //     component: <Contact />
  //   }
  // ]);

  return (
    <div>
      {page.component}
    </div>
  );
};

export default PageContent;
