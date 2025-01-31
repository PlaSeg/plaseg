export interface HttpResponse {
	success: boolean;
	errors: string[] | null;
	statusCode: number;
}
