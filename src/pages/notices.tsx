import { Card } from "@/components/listing/card";
import { NoticesFilter } from "@/components/listing/listing-filters/notices-filter";
import { notices } from "@/mocks/notices";

export function Notices() {
	return (
		<div className="flex flex-col">
			<header className="flex bg-white border-b p-4 pl-6">
				<h1 className="text-2xl font-bold">Plaseg</h1>
			</header>

			<div className="flex p-6 gap-6">
				<div className="flex">
					<NoticesFilter />
				</div>

				<div className="flex flex-col flex-1 gap-6">
					{notices.map((notice, index) => (
						<Card key={index} {...notice} />
					))}
				</div>
			</div>
		</div>
	);
}
