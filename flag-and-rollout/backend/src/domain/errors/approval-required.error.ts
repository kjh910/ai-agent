export class ApprovalRequiredError extends Error {
  constructor(message = "Approval required before applying rollout change.") {
    super(message);
    this.name = "ApprovalRequiredError";
  }
}
