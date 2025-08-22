import { GeralInfoSection } from "@/components/municipality/view-profile/geral-info-section";
import { AllocationDepartmentsSection } from "@/components/municipality/view-profile/allocation-departments-section";
import { MaintenanceContractsSection } from "@/components/municipality/view-profile/maintenance-contracts-section";
import { QualifiedStaffSection } from "@/components/municipality/view-profile/qualified-staffs-section";
import { ProjectPartnershipSection } from "@/components/municipality/view-profile/project-partnership-section";
import { ManagementsSection } from "@/components/municipality/view-profile/managements-section";
import { useGetMunicipality } from "@/hooks/municipalities/use-get-municipality";

export default function MunicipalityProfilePage() {
	const { municipality, isLoadingGetMunicipality } = useGetMunicipality();

	const geralInfoData = {
		name: municipality?.name || "",
		federativeUnit: municipality?.federativeUnit || "",
		unitType: municipality?.unitType || "",
		createdAt: municipality?.createdAt || "",
		guardCount: municipality?.guardCount || 0,
		guardInitialDate: municipality?.guardInitialDate || "",
		trafficCount: municipality?.trafficCount || 0,
		trafficInitialDate: municipality?.trafficInitialDate || "",
	};

	const departmentsData = municipality?.allocationDepartments || [];
	const contractsData = municipality?.maintenanceContracts || [];
	const staffData = municipality?.qualifiedStaff || [];
	const projectsData = municipality?.projectsPartnerships || [];
	const managementData = municipality?.managements || [];

	return (
		<div className="min-h-screen bg-gray-50">
			<GeralInfoSection
				name={geralInfoData.name}
				federativeUnit={geralInfoData.federativeUnit}
				unitType={geralInfoData.unitType}
				createdAt={geralInfoData.createdAt}
				guardCount={geralInfoData.guardCount}
				guardInitialDate={geralInfoData.guardInitialDate}
				trafficCount={geralInfoData.trafficCount}
				trafficInitialDate={geralInfoData.trafficInitialDate}
			/>

			<div className="max-w-7xl mx-auto px-6 py-8">
				<div className="grid grid-cols-1 gap-8 mb-8">
					<AllocationDepartmentsSection departments={departmentsData} />
				</div>

				<div className="grid grid-cols-1 gap-8">
					<MaintenanceContractsSection contracts={contractsData} />
					<QualifiedStaffSection staffMembers={staffData} />
					<ProjectPartnershipSection projects={projectsData} />
				</div>

				<div className="mt-8">
					<ManagementsSection managements={managementData} />
				</div>
			</div>
		</div>
	);
}
