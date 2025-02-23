import type { PostHogConfig } from "posthog-js";

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
  };
}
