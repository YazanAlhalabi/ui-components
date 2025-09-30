import { Table, TableBody, TableCell, TableHeader, TableRow } from "./ui/table"
import type { Product } from "../types"

export function ExpandableTable({
  headers,
  items,
}: {
  headers: string[]
  items: Product[]
}) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>{null}</TableCell>
          {headers.map((header) => (
            <TableCell key={header}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => {
          return (
            <TableRow key={item.id}>
              <TableCell>{">"}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.inStock}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.lastRestock}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
