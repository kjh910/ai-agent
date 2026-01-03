export class InvalidRolloutChangeError extends Error {
  constructor(message = "Proposed rollout change violates policy rules.") {
    super(message);
    this.name = "InvalidRolloutChangeError";
  }
}
