import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { news } from "@/mocks/news/news";

export function MoreNews() {
	return (
		<div className="space-y-4">
			<h2 className="text-xl font-medium mb-6">Mais Notícias</h2>

			{news.map((item, index) => (
				<div className="flex flex-col">
					<div key={index} className="flex items-center gap-4 p-2 rounded-lg">
						<div className="flex-1">
							<div className="flex items-center gap-2 mb-1">
								<span className="text-sm">{item.category}</span>
								<span className="text-muted-foreground">|</span>
								<span className="text-sm text-muted-foreground">
									{item.readTime}
								</span>
							</div>

							<h3 className="font-medium mb-1">{item.title}</h3>
							<p className="text-sm text-muted-foreground line-clamp-2">
								{item.excerpt}
							</p>
						</div>

						<div className="w-[160px] h-[100px] rounded-lg overflow-hidden">
							<div className="w-full h-full rounded-md bg-gray-100" />
						</div>
					</div>

					<div className="flex justify-end">
						<Button
							variant="link"
							className="flex items-center gap-2 text-foreground"
						>
							Acessar <ArrowRight />
						</Button>
					</div>
				</div>
			))}
		</div>
	);
}
