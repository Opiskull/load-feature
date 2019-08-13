export interface IFeatureFlag extends IFeatureDescription {
  enabled: boolean;
}

export interface IFeatureDescription {
  id: string;
  name: string;
  description: string;
}

export interface IEnabledFeatures { [featureId: string]: boolean };
