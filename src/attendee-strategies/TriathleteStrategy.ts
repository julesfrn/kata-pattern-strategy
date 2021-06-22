import EventAttendeeStrategy from '../EventAttendeeStrategy'

export default class TriathleteStrategy implements EventAttendeeStrategy {
  constructor(public readonly name: string) {}

  compete(results: string[]) {
    results.push(`${this.name} a courru, fait du vélo et nagé.`)
  }
}
