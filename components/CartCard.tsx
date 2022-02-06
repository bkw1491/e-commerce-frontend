import Incrementer from "@components/Incrementer";

import { TrashIcon } from "@heroicons/react/outline";
import { useAppDispatch } from "@hooks/useAppDispatch";
import { ICartItem } from "@interfaces/ICartItem";
import { cartDelete, cartUpdate } from "@store/cart/actions";

type CartCardProps = {
	item: ICartItem;
};

function CartCard({ item }: CartCardProps) {
	//pre-typed dispatch hook, needed to remove and update items
	const dispatch = useAppDispatch();

	const { id, name, price, quantity, image_url, image_alt } = item;

	function handleRemove() {
		dispatch(cartDelete({ id }));
	}

	function handleIncrement() {
		if (quantity === 99) {
			return;
		}
		dispatch(cartUpdate({ ...item, quantity: quantity + 1 }));
	}

	function handleDecrement() {
		if (quantity === 1) {
			return;
		}
		dispatch(cartUpdate({ ...item, quantity: quantity - 1 }));
	}

	return (
		<div className="flex h-40 flex-row gap-5 py-4">
			<div className="h-32 w-24 flex-shrink-0">
				<img
					src={image_url}
					alt={image_alt}
					className="h-full w-full rounded-md object-cover object-center"
				/>
			</div>

			{/* Name, Price, Quantity */}

			<div className="flex w-max flex-grow flex-col justify-between">
				<h1 className="text-contrast">{name}</h1>
				<h2 className="text-gray-300">£{(price * quantity) / 100} GBP</h2>

				<div className="flex flex-row justify-between">
					{/* Quantity Counter */}

					<Incrementer
						increment={handleIncrement}
						decrement={handleDecrement}
						counter={quantity}
					/>

					<button onClick={handleRemove}>
						<TrashIcon className="text-contrast hover:text-accent h-5 w-5" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CartCard;
