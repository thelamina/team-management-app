import {
	createContext,
	useCallback,
	useReducer,
} from 'react';
import {
	eventReducer,
	GET_EVENTS_LIST_SUCCESS,
	GET_EVENTS_PROGRESS_SUCCESS,
} from './reducer';
import { Events } from '../../utils';

interface EventContextValue {
	getTotalProgress: () => void;
	getAllEvents: any;
	incrementProgress: (event: number | string) => void;
	state: {
		events: any[];
		isLoading: Boolean;
		progress: Number;
	};
}

// @ts-ignore
export const EventContext = createContext<EventContextValue>();

export const EventProvider = ({ children }: any) => {
	const initialState = {
		events: Events,
		isLoading: false,
		progress: 0,
	};
	const [state, dispatch] = useReducer(eventReducer, initialState);

	const getTotalProgress = useCallback(() => {
		const pr = state.events.map((ev: any) => ev.progress);
		const mean =
			pr.reduce((prev: any, curr: any) => prev + curr, 0) / pr.length;
		dispatch({ type: GET_EVENTS_PROGRESS_SUCCESS, payload: mean });
	}, [state.events]);

	const getAllEvents = useCallback(() => {
		const colors = [
			'#fd7e2e',
			'#f9d018',
			'#f0d766',
			'#1506a0',
			'#695fc7',
			'#ffd000',
			'#e06b35',
			'#131e3a',
		];
		const randomDate = (start: any, end: any) => {
			return new Date(
				start.getTime() +
					Math.random() * (end.getTime() - start.getTime())
			);
		};
		const addDays = (date: Date, days: number) => {
			var result = new Date(date);
			result.setDate(result.getDate() + days);
			return result;
		};
		const allEvents = Events.map((eve) => {
			const startDate = randomDate(new Date(2022, 2, 10), new Date());
			return {
				...eve,
				start: startDate,
				end: addDays(
					new Date(startDate),
					Math.floor(Math.random() * (15 - 6) + 6)
				),
				progress: 0,
				extendedProps: {
					progress: 0,
					colorScheme:
						colors[Math.floor(Math.random() * colors.length)],
				},
			};
		});
		dispatch({ type: GET_EVENTS_LIST_SUCCESS, payload: allEvents });
		getTotalProgress();
		return allEvents;
	}, [getTotalProgress]);

	const incrementProgress = useCallback(() => {
		const newEvents = state.events.map((ev: any) => {
			// console.log(ev.id);
			// if (ev.id === eventId) {
			const getPr = () => {
				const newValue =
					ev.progress + Math.round(Math.random() * (30 - 10) + 10);
				if (newValue >= 100) {
					return 100;
				}
				return newValue;
			};

			return {
				...ev,
				extendedProps: {
					...ev.extendedProps,
					progress: getPr(),
				},
			};
			// }
			// return ev;
		});

		dispatch({ type: GET_EVENTS_LIST_SUCCESS, payload: newEvents });
		getTotalProgress();
	}, [getTotalProgress, state.events]);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		incrementProgress();
	// 	}, 1000);
	// 	return () => clearInterval(interval);
	// }, []);

	return (
		<EventContext.Provider
			value={{ state, getTotalProgress, getAllEvents, incrementProgress }}
		>
			{children}
		</EventContext.Provider>
	);
};
