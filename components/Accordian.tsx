import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

type AccordianProps = {
	accordians: { title: string; descr: string }[];
};

function Accordian(props: AccordianProps) {
	return (
		<ul>
			{props.accordians.map(acc => {
				return (
					<li key={acc.title} className="py-1">
						<Disclosure>
							{({ open }) => (
								<>
									<Disclosure.Button className="text-contrast bg-midtone flex w-full justify-between rounded-md px-4 py-2 text-left text-sm font-medium">
										<span>{acc.title}</span>
										<ChevronUpIcon
											className={`${
												open ? "rotate-180 transform" : ""
											} text-accent h-5 w-5`}
										/>
									</Disclosure.Button>

									<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-400">
										{acc.descr}
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</li>
				);
			})}
		</ul>
	);
}

export default Accordian;
