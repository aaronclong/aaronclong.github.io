import { PostHogConfig, posthog, PostHog } from "posthog-js";

export type Client = PostHog;
export const client = posthog;

type AnalyticsConfig = Partial<PostHogConfig> & {
  public_key: string;
};

export function getAnalyticsConfig(): AnalyticsConfig {
  // snake case for the config
  const public_key: string = import.meta.env.VITE_POSTHOG_KEY;
  const api_host: string = import.meta.env.VITE_POSTHOG_HOST;

  return {
    public_key,
    api_host,
    person_profiles: "always",
    autocapture: false,
    // loaded: (posthog) => {
    //   posthog.opt_out_capturing(); // Disable tracking by default
    // },
  };
}

export function initAnalytics() {
  const { public_key, ...options } = getAnalyticsConfig();
  posthog.init(public_key, options);
}

class ConsentStorage {
  private static readonly Key = "track_consent";
  constructor(private readonly storage: Storage) {}

  public get = (): boolean | undefined => {
    const value = this.storage.getItem(ConsentStorage.Key);
    return value ? ConsentStorage.convertToBoolean(value) : undefined;
  };

  public set = (value: boolean): void => {
    this.storage.setItem(ConsentStorage.Key, value.toString());
  };

  private static convertToBoolean(value: string): boolean {
    return value?.toLowerCase() === "true";
  }
}

/**
 * Lady initalize to wait for the window to be defined
 */
export const getConsentStorage = (() => {
  let storage: ConsentStorage | undefined = undefined;
  return () => {
    if (!storage) {
      storage = new ConsentStorage(window.localStorage);
    }
    return storage;
  };
})();
