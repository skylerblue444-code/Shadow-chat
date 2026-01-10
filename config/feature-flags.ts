export const FeatureFlags = {
  AI: process.env.FEATURE_AI === "true",
  WALLET: process.env.FEATURE_WALLET === "true",
  MESSAGING: true,
  ADMIN: true
};