import { v4 } from 'uuid';
import { CampaignData } from '../../interfaces';

const generateRandomData = (name: string): CampaignData => {
  const id = v4();
  const installs = [...Array(7)].map((item, index) => {
    const value = Math.floor(Math.random() * 200);
    switch (index) {
      case 0:
        return ({ day: 'monday', value });
      case 1:
        return ({ day: 'tuesday', value });
      case 2:
        return ({ day: 'wednesday', value });
      case 3:
        return ({ day: 'thursday', value });
      case 4:
        return ({ day: 'friday', value });
      case 5:
        return ({ day: 'saturday', value });
      default:
        return ({ day: 'sunday', value });
    }
  });
  return ({ id, name, installs });
};

export default generateRandomData;
