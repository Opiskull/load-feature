import { FeatureFlagsState, IEnabledFeatures, IFeatureFlag } from './feature-flags/interfaces';
import { FeaturesState, IContentBlock, ISettingsBlock } from './features/interfaces';
export class State implements FeaturesState, FeatureFlagsState {
  enabled: IEnabledFeatures = {}
  features: IFeatureFlag[] = []
  contents: { [type: string]: IContentBlock; } = {}
  settings: { [id: string]: ISettingsBlock; } = {}


}
