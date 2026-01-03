export type DomainEvent = {
  name: string;
  payload: unknown;
  occurredAt: string;
};

export interface EventBusPort {
  publish(event: DomainEvent): Promise<void>;
}
