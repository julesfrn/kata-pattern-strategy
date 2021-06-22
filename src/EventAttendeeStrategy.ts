export default interface EventAttendeeStrategy {
  name: string
  compete(results: string[]): void
}
