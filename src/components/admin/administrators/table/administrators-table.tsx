import { useGetAdministrators } from "@/hooks/admin/administrators/use-get-administrators";
import { useDeleteAdministrator } from "@/hooks/admin/administrators/use-delete-administrator";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { CreateAdministratorModal } from "../modals/create-administrator-modal";
import { AdministratorsTableHeader } from "./administrators-table-header";
import { AdministratorsTableBodySkeleton } from "./administrators-table-body-skeleton";
import { AdministratorSchema } from "@/@schemas/administrator";

export function AdministratorsTable() {
	const { data: administrators, isLoading } = useGetAdministrators();
	const { mutate: deleteAdministrator } = useDeleteAdministrator();
	const [selectedAdministrator, setSelectedAdministrator] = useState<
		string | null
	>(null);
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	return (
		<>
			<div className="flex justify-end mb-4">
				<Button onClick={() => setIsCreateModalOpen(true)}>
					Novo Administrador
				</Button>
			</div>
			<div className="overflow-x-auto rounded-md border">
				<table className="min-w-full divide-y divide-gray-200">
					<AdministratorsTableHeader />
					{isLoading ? (
						<AdministratorsTableBodySkeleton />
					) : (
						<tbody>
							{administrators?.map((administrator: AdministratorSchema) => (
								<tr key={administrator.id}>
									<td>{administrator.name}</td>
									<td>{administrator.email}</td>
									<td>{administrator.document}</td>
									<td>{administrator.phone}</td>
									<td>{administrator.role}</td>
									<td>
										{administrator.createdAt instanceof Date
											? administrator.createdAt.toLocaleDateString()
											: administrator.createdAt}
									</td>
									<td>
										<div className="flex items-center gap-2">
											<Button
												variant="ghost"
												size="icon"
												onClick={() =>
													setSelectedAdministrator(administrator.id)
												}
											>
												<Pencil className="h-4 w-4" />
											</Button>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => deleteAdministrator(administrator.id)}
											>
												<Trash2 className="h-4 w-4" />
											</Button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</table>
			</div>

			<CreateAdministratorModal
				open={isCreateModalOpen}
				onOpenChange={setIsCreateModalOpen}
			/>
		</>
	);
}
