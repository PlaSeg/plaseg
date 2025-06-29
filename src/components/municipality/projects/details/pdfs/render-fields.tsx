import { nestFields } from "@/utils/nested-fields";

const isIntegerString = (str: string): boolean => {
	const num = parseFloat(str);
	return !isNaN(num) && Number.isInteger(num);
};

export function renderFields(fields: ReturnType<typeof nestFields>) {
	return (
		<div className="space-y-2">
			{fields.map((field) => (
				<div key={field.id}>
					<div
						className={`text-black p-2 border-y border-black
						${isIntegerString(field.order) ? "bg-muted font-bold uppercase" : "font-medium"}
						${!isIntegerString(field.order) ? "border-0" : ""}
						${field.order === "1" && field.value !== "" ? "border-0 border-t-0" : ""}`}
					>
						{field.order}. {field.name}
					</div>

					{field.value && (
						<div className="text-black text-sm px-3 py-2">{field.value}</div>
					)}

					{field.fields &&
						field.fields.length > 0 &&
						renderFields(field.fields)}
				</div>
			))}
		</div>
	);
}
