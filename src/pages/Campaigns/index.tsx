import React, { FunctionComponent } from 'react';
import TemplateWithHeader from '../../components/templates/TemplateWithHeader';
import CampaignOrganism from '../../components/organisms/CampaignOrganism';

const Campaigns: FunctionComponent = () => (
  <TemplateWithHeader>
    <CampaignOrganism />
  </TemplateWithHeader>
);
export default Campaigns;
