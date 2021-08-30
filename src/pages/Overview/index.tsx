import React, { FunctionComponent } from 'react';
import TemplateWithHeader from '../../components/templates/TemplateWithHeader';
import OverviewOrganism from '../../components/organisms/OverviewOrganism';

const Overview: FunctionComponent = () => (
  <TemplateWithHeader>
    <OverviewOrganism />
  </TemplateWithHeader>
);
export default Overview;
