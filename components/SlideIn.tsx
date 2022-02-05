import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

type FlyoutProps = {
	appearFrom: "left" | "right";
	open: boolean;
	children: React.ReactNode;
};

function SlideIn({ appearFrom, children, open }: FlyoutProps) {
	return (
		<Transition show={open}>
			{/* whole component fades in */}

			<Transition.Child
				as={Fragment}
				enter="transition-opacity duration-500"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-500"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				{/* position depends on appearFrom */}

				<Popover.Panel
					className={`absolute top-0 ${
						appearFrom === "right" ? "right-0" : "left-0"
					} bg-darker z-50 min-h-screen w-full overflow-y-scroll bg-opacity-70`}
				>
					{/* opaque section slides in appearFrom side */}

					<Transition.Child
						as={Fragment}
						enter="transition duration-500 transform"
						enterFrom={
							appearFrom === "left" ? "-translate-x-full" : "translate-x-full"
						}
						enterTo="translate-x-0"
						leave="transition duration-500 transform"
						leaveFrom="translate-x-0"
						leaveTo={
							appearFrom === "left" ? "-translate-x-full" : "translate-x-full"
						}
					>
						<div
							className={`bg-darker absolute top-0 w-3/4 md:w-1/2 lg:w-1/3 lg:px-5 xl:w-1/4 ${
								appearFrom === "right" ? "right-0" : "left-0"
							} min-h-screen p-3`}
						>
							{children}
						</div>
					</Transition.Child>
				</Popover.Panel>
			</Transition.Child>
		</Transition>
	);
}

export default SlideIn;
