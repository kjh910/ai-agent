import { EventBusPort, DomainEvent } from "../../application/ports/event-bus.port";

export class InMemoryEventBus implements EventBusPort {
  private events: DomainEvent[] = [];

  async publish(event: DomainEvent): Promise<void> {
    this.events.push(event);
  }

  getPublishedEvents(): DomainEvent[] {
    return [...this.events];
  }
}
