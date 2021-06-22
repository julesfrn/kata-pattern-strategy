import EventAttendeeStrategy from '../EventAttendeeStrategy'

export default class RunnerStrategy implements EventAttendeeStrategy {
  constructor(public readonly name: string) { }
  
  compete(results: string[]) {
    results.push(`${this.name} a courru.`)
  }
}
