import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

type IncrementerProps = {
	increment: () => void;
	decrement: () => void;
	counter: number;
};

function Incrementer(props: IncrementerProps) {
	return (
		<div className="bg-midtone flex flex-row border-[1px] border-gray-700">
			<button>
				<PlusIcon
					className="text-contrast h-10 w-10 p-3"
					onClick={props.increment}
				/>
			</button>

			<span className="text-contrast flex items-center justify-center p-1 text-sm">
				{props.counter}
			</span>

			<button>
				<MinusIcon
					className="text-contrast h-10 w-10 p-3"
					onClick={props.decrement}
				/>
			</button>
		</div>
	);
}

export default Incrementer;
