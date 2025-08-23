import {
	useReactTable,
	getCoreRowModel,
	flexRender,
} from '@tanstack/react-table';

const Tabla = ({ columns, data, className, firstRowClass }) => {
	const table = useReactTable({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className={`w-full overflow-x-auto ${className}`}>
			<table className="min-w-max border-collapse text-xs md:text-sm">
				<thead className="sticky top-0 bg-gray-600 text-white">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							{headerGroup.headers.map((header, index) => (
								<th
									key={header.id}
									className={`p-2 text-left font-bold whitespace-normal break-words max-w-[140px] md:max-w-[200px] ${
										index === 0 ? 'rounded-tl-lg' : ''
									} ${
										index === headerGroup.headers.length - 1
											? 'rounded-tr-lg'
											: 'border-r'
									}`}>
									{!header.isPlaceholder &&
										flexRender(
											header.column.columnDef.header,
											header.getContext()
										)}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => (
						<tr key={row.id}>
							{row.getVisibleCells().map((cell, index) => (
								<td
									key={cell.id}
									className={`${
										firstRowClass ?? 'text-white'
									} border-t p-2 font-bold whitespace-normal break-words max-w-[140px] md:max-w-[200px] hover:bg-white hover:text-black ${
										index === row.getVisibleCells().length - 1 ? '' : 'border-r'
									}`}>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Tabla;
