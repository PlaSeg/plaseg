declare module "html2pdf.js" {
	interface Html2PdfOptions {
		margin?: number | [number, number, number, number];
		filename?: string;
		image?: {
			type?: string;
			quality?: number;
		};
		enableLinks?: boolean;
		html2canvas?: {
			scale?: number;
			useCORS?: boolean;
			allowTaint?: boolean;
		};
		jsPDF?: {
			orientation?: "portrait" | "landscape";
			unit?: "pt" | "mm" | "cm" | "in";
			format?: string | [number, number];
		};
	}

	function html2pdf(
		element: HTMLElement,
		options?: Html2PdfOptions
	): Promise<void>;

	export = html2pdf;
}
