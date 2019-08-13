import { IEnabledFeatures } from "./interfaces";

export class FeatureFlagsService {
  public save(enabledFeatures: IEnabledFeatures) {
    localStorage.setItem("feature-flags", JSON.stringify(enabledFeatures));
  }

  public load(): IEnabledFeatures {
    return JSON.parse(localStorage.getItem("feature-flags")) || {};
  }
}
