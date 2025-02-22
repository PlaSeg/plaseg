import { zodResolver } from "@hookform/resolvers/zod";
import { FileUploader } from "@/components/file-uploader/file-uploader";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

const schema = z.object({
	images: z.array(z.instanceof(File)),
});

type Schema = z.infer<typeof schema>;

export function AttachmentsUploader() {
	const form = useForm<Schema>({
		resolver: zodResolver(schema),
		defaultValues: {
			images: [],
		},
	});

	return (
		<div className="w-[500px] border rounded-lg p-6">
			<FormField
				control={form.control}
				name="images"
				render={({ field }) => (
					<div className="space-y-6">
						<FormItem className="w-full">
							<FormLabel className="text-lg font-medium">
								Fotos e Documentos Técnicos
							</FormLabel>

							<FormControl>
								<FileUploader
									value={field.value}
									onValueChange={field.onChange}
									maxFileCount={10}
									maxSize={10 * 1024 * 1024}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					</div>
				)}
			/>
		</div>
	);
}
