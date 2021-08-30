import React, { FunctionComponent } from 'react';
import TemplateWithHeader from '../../components/templates/TemplateWithHeader';
import CreateCampaignOrganism from '../../components/organisms/CreateCampaignOrganism';

const CampaignForm: FunctionComponent = () => (
  <TemplateWithHeader>
    <CreateCampaignOrganism />
  </TemplateWithHeader>

);
export default CampaignForm;
