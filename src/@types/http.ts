export interface HttpResponse {
	success: boolean;
	errors: string[] | null;
	statusCode: number;
}
export interface HTTPSuccessResponse {
	success: true;
	error: null;
}
export interface HTTPErrorResponse {
	success: false;
	error: string;
	data: null;
}

