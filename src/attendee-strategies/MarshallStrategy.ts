import EventAttendeeStrategy from '../EventAttendeeStrategy'

export default class MarshallStrategy implements EventAttendeeStrategy {
  constructor(public readonly name: string) { }

  compete(results: string[]) { }
}
