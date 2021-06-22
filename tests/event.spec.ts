import Event from '../src/EventContext'
import MarshallStrategy from '../src/attendee-strategies/MarshallStrategy'
import RunnerStrategy from '../src/attendee-strategies/RunnerStrategy'
import TriathleteStrategy from '../src/attendee-strategies/TriathleteStrategy'

/// These are tests for the kata implementing the Strategy pattern:
/// Define a family of algorithms (behaviour), encapsulate each one and make them interchangeable.
/// AKA: Separate what changes (the behaviour) from what does not.");

describe('pattern strategy', () => {
  it('créer un évènemment marathon de Londres', () => {
    const eventName = 'London marathon'
    const event = new Event(eventName, [])

    expect(event.name).toEqual(eventName)
  })
  describe('quand l‘évènemment est lancé avec des coureurs', () => {
    it('ajoute les coureurs dans les résultats', () => {
			const attendees = [new RunnerStrategy('John'), new RunnerStrategy('Paul')]
			const event = new Event('London marathon', attendees)

			event.start()

			expect(event.results).toEqual(['John a courru.', 'Paul a courru.'])
    })
	})
	describe('quand l‘évènemment est lancé avec des coureurs et un marshall', () => {
		it('ajoute les coureurs dans les résultats mais n‘ajoute pas le marshall', () => {
			const runners = [new RunnerStrategy('John'), new RunnerStrategy('Paul')]
			const marshall = new MarshallStrategy('Ringo')

			const event = new Event('London marathon', [...runners, marshall])
			
      event.start()

			expect(event.results).toEqual(['John a courru.', 'Paul a courru.'])
		})
	})
	describe('quand l‘évènement est lancé avec des coureurs, un marshall et un triathlète', () => {
		it('ajoute les coureurs et le triathlète dans les résultats mais n‘ajoute pas le marshall', () => {
			const runners = [new RunnerStrategy('John'), new RunnerStrategy('Paul')]
			const triathlete = new TriathleteStrategy('Georges')
      const marshall = new MarshallStrategy('Ringo')

      const event = new Event('London marathon', [...runners, triathlete, marshall])

      event.start()

      expect(event.results).toEqual(['John a courru.', 'Paul a courru.', 'Georges a courru, fait du vélo et nagé.'])
    })
	})
})
