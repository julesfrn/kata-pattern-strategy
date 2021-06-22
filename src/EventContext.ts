import EventAttendeeStrategy from './EventAttendeeStrategy'

export default class EventContext {
  public results: string[] = []

  constructor(public name: string, protected attendeeStrategies: EventAttendeeStrategy[]) {}

  setStrategies(strategies: EventAttendeeStrategy[]): void {
    this.attendeeStrategies = strategies
  }

  start(): void {
    this.attendeeStrategies.forEach((attendeeStrategy => {
      attendeeStrategy.compete(this.results)
    }))
  }
}
