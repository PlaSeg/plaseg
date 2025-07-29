import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export function formatDate(dateString: string | Date): string {
	return dayjs(dateString).format("DD/MM/YYYY");
}

export function formatDateTime(dateString: string | Date): string {
	return dayjs(dateString).format("DD/MM/YYYY HH:mm");
}

export function formatDateToBrazilian(dateString: string): string {
	return dayjs(dateString).locale("pt-br").format("DD [de] MMMM [de] YYYY");
}
