export const SAFETY = {
  READ_ONLY: process.env.READ_ONLY_MODE === "true",
  KILL_SWITCH: process.env.KILL_SWITCH === "true",
};