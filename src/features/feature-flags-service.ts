import { EnabledFeatures } from "./interfaces";

export class FeatureFlagsService {
  public save(enabledFeatures: EnabledFeatures) {
    localStorage.setItem("feature-flags", JSON.stringify(enabledFeatures));
  }

  public load(): EnabledFeatures {
    return JSON.parse(localStorage.getItem("feature-flags")) || {};
  }
}
