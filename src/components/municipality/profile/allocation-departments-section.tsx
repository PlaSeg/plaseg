import { Building2 } from "lucide-react";
import { allocationDepartment } from "@/@types/municipality/municipality";

interface AllocationDepartmentsSectionProps {
	departments: allocationDepartment[];
}

export function AllocationDepartmentsSection({
	departments,
}: AllocationDepartmentsSectionProps) {
	return (
		<div className="lg:col-span-2 bg-white border border-gray-100 p-6 rounded-lg">
			<h3 className="text-lg font-medium mb-6 flex items-center gap-3 text-gray-900">
				<Building2 className="h-5 w-5 text-gray-600" />
				Departamentos
			</h3>
			
			<div className="space-y-4">
				{departments.map((dept) => (
					<div className="border-l-2 border-gray-200 pl-4">
						<h4 className="font-medium text-gray-900">{dept.description}</h4>
						<p className="text-sm text-gray-500 mt-1">{dept.address}</p>
					</div>
				))}
			</div>
		</div>
	);
}
