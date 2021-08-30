export type ArrayElement = {
  day: string,
  value: number,
};

export interface OverviewData {
  installs: Array<ArrayElement>,
  revenue: Array<ArrayElement>
}

export interface CampaignData {
  id : string,
  name: string,
  installs: Array<ArrayElement>
}
