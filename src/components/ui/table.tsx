import React from "react"

import { cn } from "../../lib/utils"

export function Table({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <table className={cn(className)} {...props}>
      {children}
    </table>
  )
}

export function TableHeader({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={cn(className)} {...props}>
      {children}
    </thead>
  )
}

export function TableBody({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={cn(className)} {...props}>
      {children}
    </tbody>
  )
}

export function TableRow({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) {
  return (
    <tr className={cn(className)} {...props}>
      {children}
    </tr>
  )
}

export function TableCell({
  children,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={cn(className)} {...props}>
      {children}
    </td>
  )
}
