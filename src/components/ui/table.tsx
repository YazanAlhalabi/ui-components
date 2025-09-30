import type { ReactNode } from "react"
import React from "react"

//TODO: add dynamic classNames
export function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement> & {
  children: ReactNode
}) {
  return (
    <div className='w-full overflow-auto rounded-md border'>
      <table className='w-full border-collapse text-sm' {...props}>
        {children}
      </table>
    </div>
  )
}

export function TableHeader({
  children,
  ...props
}: React.ThHTMLAttributes<HTMLTableSectionElement> & { children: ReactNode }) {
  return (
    <thead className='bg-gray-50 border-b' {...props}>
      {children}
    </thead>
  )
}

export function TableBody({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { children: ReactNode }) {
  return <tbody {...props}>{children}</tbody>
}

//TODO: add a11y & custom styling
export function TableRow({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement> & { children: ReactNode }) {
  return (
    <tr
      {...props}
      className='cursor-pointer hover:bg-gray-50 select-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
    >
      {children}
    </tr>
  )
}

export function TableCell({
  children,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement> & { children: ReactNode }) {
  return (
    <td {...props} className='p-2'>
      {children}
    </td>
  )
}
