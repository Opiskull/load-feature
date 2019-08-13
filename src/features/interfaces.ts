export interface IFeatureFlag {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface IFeature extends IFeatureFlag {
  initialize: () => Promise<void>;
}

export type EnabledFeatures = { [featureId: string]: boolean };
