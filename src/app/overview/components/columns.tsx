"use client";

import { Bookmark } from "@/app/Modal";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import TableActions from "./table-actions";

export const columns: ColumnDef<Bookmark>[] = [
	{
		header: "Title",
		cell: ({ row }) => {
			return (
				<div>
					<Link href={row.original.url} className="cursor-pointer">
						{row.original.alias || row.original.url}
					</Link>
				</div>
			);
		},
	},
	{
		header: "Actions",
		id: "actions",
		cell: ({ row }) => {
			return (
				<TableActions
					id={row.original.id}
					alias={row.original.alias}
					url={row.original.url}
				/>
			);
		},
	},
];
