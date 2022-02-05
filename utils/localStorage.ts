import { RootState } from "@store/store";

// convert object to string and store in localStorage
// the jwt is stored in state and is saved to localStorage
// this is ok, doesn't matter if token is read
export function saveToLocalStorage(state: RootState) {
	try {
		localStorage.setItem("appState", JSON.stringify(state));
	} catch (e) {
		console.log(e);
	}
}

// load string from localStarage and convert into an obj
// invalid output must be undefined
export function loadFromLocalStorage() {
	try {
		const json = localStorage.getItem("appState");
		if (!json) return undefined;
		return JSON.parse(json) as RootState;
	} catch (e) {
		return undefined;
	}
}
