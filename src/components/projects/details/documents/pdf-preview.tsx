/* eslint-disable jsx-a11y/alt-text */
"use client";
import { type DocumentProps, pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface PDFPreviewProps {
	pdfPath: React.ReactElement<DocumentProps>;
	pdfName: string;
}

export function PDFPreview({ pdfPath, pdfName }: PDFPreviewProps) {
	const [pdfUrl, setPdfUrl] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	// Function to download PDF with custom name
	const downloadPDF = async () => {
		if (!pdfUrl) return;

		try {
			// Fetch the PDF blob from the URL
			const response = await fetch(pdfUrl);
			const blob = await response.blob();

			// Create a download link
			const downloadUrl = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = downloadUrl;

			// Use pdfName for the filename, ensuring it has .pdf extension
			const fileName = pdfName.endsWith(".pdf") ? pdfName : `${pdfName}.pdf`;
			link.download = fileName;

			// Trigger download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up the temporary URL
			URL.revokeObjectURL(downloadUrl);
		} catch (err) {
			console.error("Error downloading PDF:", err);
		}
	};

	useEffect(() => {
		const generatePdf = async () => {
			try {
				setLoading(true);
				setError(null);
				const blob = await pdf(pdfPath).toBlob();
				const url = URL.createObjectURL(blob);
				setPdfUrl(url);
			} catch (err) {
				console.error("Error generating PDF:", err);
				setError("Failed to generate PDF");
			} finally {
				setLoading(false);
			}
		};

		generatePdf();

		// Cleanup function to revoke the blob URL when component unmounts
		return () => {
			// This cleanup will run when the component unmounts
			// We'll handle URL cleanup in a separate useEffect
		};
	}, [pdfPath]); // Add pdfPath as dependency

	// Separate useEffect for cleanup when pdfUrl changes
	useEffect(() => {
		return () => {
			if (pdfUrl) {
				URL.revokeObjectURL(pdfUrl);
			}
		};
	}, [pdfUrl]);

	if (loading) {
		return (
			<div className="h-full w-full flex items-center justify-center bg-gray-100">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
					<p className="text-gray-600">Generating PDF...</p>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="h-full w-full flex items-center justify-center bg-gray-100">
				<div className="text-center text-red-600">
					<p className="text-lg font-semibold mb-2">Error</p>
					<p>{error}</p>
				</div>
			</div>
		);
	}

	if (!pdfUrl) {
		return (
			<div className="h-full w-full flex items-center justify-center bg-gray-100">
				<p className="text-gray-600">No PDF available</p>
			</div>
		);
	}

	return (
		<div className="h-screen w-full bg-gray-100 flex flex-col">
			<div className="bg-white shadow-sm border-b py-3 flex justify-between items-center">
				<Button
					variant="outline"
					type="button"
					onClick={downloadPDF}
					disabled={!pdfUrl || loading}
				>
					{loading ? "Gerando..." : "Baixar PDF"}
				</Button>
			</div>

			<div className="flex-1 flex items-center justify-center">
				<div className="h-full w-full max-w-4xl bg-white shadow-lg">
					<iframe
						src={pdfUrl}
						className="h-full w-full border-0"
						title={pdfName}
					/>
				</div>
			</div>
		</div>
	);
}
