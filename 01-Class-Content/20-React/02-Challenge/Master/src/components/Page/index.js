import React from 'react';
import PageContent from '../PageContent';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page(props) {
  const { currentPage } = props;
  return (
    <section>
      <h2 data-testid="h2tag">{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent page={currentPage} />
    </section>
  );
}
export default Page;
