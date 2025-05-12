import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
	UpdateBaseProductRequestSchema,
	createBaseProductRequestSchema,
} from "@/@schemas/base-product";
import { updateBaseProduct } from "@/api/admin/base-products/update-base-product";
import { useState } from "react";
import { toast } from "sonner";
import { BaseProduct } from "@/@types/base-product";
import { useFormMutation } from "@/hooks/use-form-mutation";

export function useUpdateBaseProduct(baseProduct?: BaseProduct) {
	const queryClient = useQueryClient();
	const [isUpdateBaseProductSheetOpen, setIsUpdateBaseProductSheetOpen] =
		useState(false);
	const form = useFormMutation({
		schema: createBaseProductRequestSchema,
		defaultValues: {
			code: baseProduct?.code ?? "",
			name: baseProduct?.name ?? "",
			typeId: baseProduct?.typeId ?? "",
			technicalDescription: baseProduct?.technicalDescription ?? "",
			budget1: baseProduct?.budget1 ?? 0,
			budget1Validity: baseProduct?.budget1Validity
				? new Date(baseProduct.budget1Validity)
				: new Date(),
			budget2: baseProduct?.budget2 ?? 0,
			budget2Validity: baseProduct?.budget2Validity
				? new Date(baseProduct.budget2Validity)
				: new Date(),
			budget3: baseProduct?.budget3 ?? 0,
			budget3Validity: baseProduct?.budget3Validity
				? new Date(baseProduct.budget3Validity)
				: new Date(),
			unitValue: baseProduct?.unitValue ?? 0,
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	const { isPending: isUpdatingBaseProduct } = useMutation({
		mutationKey: ["update-base-product"],
		mutationFn: ({
			id,
			request,
		}: {
			id: string;
			request: UpdateBaseProductRequestSchema;
		}) => updateBaseProduct(id, request),
		onSuccess: (response) => {
			if (response.success) {
				queryClient.invalidateQueries({
					queryKey: ["get-base-products"],
				});
				form.reset();
				setIsUpdateBaseProductSheetOpen(false);
				toast.success("Produto base atualizado com sucesso!");
				return;
			}

			response.errors.forEach((error) => {
				toast.error(error);
			});
		},
	});

	return {
		form,
		isUpdatingBaseProduct,
		isUpdateBaseProductSheetOpen,
		setIsUpdateBaseProductSheetOpen,
	};
}
