import { translateAdministratorsTableKeys } from "@/utils/translate-administrators-table-keys";

export function AdministratorsTableHeader() {
	return (
		<thead>
			<tr>
				<th>{translateAdministratorsTableKeys.name}</th>
				<th>{translateAdministratorsTableKeys.email}</th>
				<th>{translateAdministratorsTableKeys.document}</th>
				<th>{translateAdministratorsTableKeys.phone}</th>
				<th>{translateAdministratorsTableKeys.role}</th>
				<th>{translateAdministratorsTableKeys.createdAt}</th>
				<th>Ações</th>
			</tr>
		</thead>
	);
}
