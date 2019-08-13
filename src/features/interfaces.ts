import { IFeatureDescription } from './../feature-flags/interfaces';
export interface IContentBlock {
  type: string;
  edit: any;
  display: any;
  dependsOnSetting?: any;
  description: string;
}

export interface ISettingsBlock {
  id: string;
  setting: any;
}

export interface IFeature extends IFeatureDescription {
  contents?: IContentBlock[];
  dependOnSetting?: any;
  settings?: ISettingsBlock[];
  initialize?(): Promise<void>;
}
