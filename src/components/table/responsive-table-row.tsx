import type { KeyboardEvent } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"

import type { TableData } from "../../types"
import { TableBody, TableCell, TableRow } from "../ui/table"
import { cn } from "../../lib/utils"

type TableProps = {
  data: TableData
  isExpanded: boolean
  onToggle: (id: string) => void
  showKeyboardFocus: boolean
  onFocus: (id: string) => void
  onBlur: (id: null) => void
  onMouseDown: (id: null) => void
}

export function ResponsiveTableRow({
  data,
  isExpanded,
  onToggle,
  showKeyboardFocus,
  onFocus,
  onBlur,
  onMouseDown,
}: TableProps) {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onToggle(data.id)
    }
  }

  return (
    <TableBody
      className={cn("block", {
        "outline-2 outline-blue-600 outline-offset-2 rounded-lg":
          showKeyboardFocus,
      })}
    >
      <TableRow
        role='button'
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-controls={`row-${data.id}-details`}
        onClick={() => onToggle(data.id)}
        onKeyDown={handleKeyDown}
        onFocus={() => onFocus(data.id)}
        onBlur={() => onBlur(null)}
        onMouseDown={() => onMouseDown(null)}
        className={cn(
          "block hover:bg-gray-50 transition-colors border border-gray-300 rounded-lg cursor-pointer outline-none",
          {
            "rounded-b-none border-b-0": isExpanded,
          }
        )}
      >
        <TableCell className='block p-0' colSpan={data.headers.length}>
          <div className='flex items-center gap-2 p-4'>
            <span aria-hidden='true' className='flex-shrink-0'>
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </span>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
              {data.cells.map((cell, cellIndex) => (
                <div key={`${data.id}-cell-${cellIndex}`} className='px-4 py-3'>
                  <div
                    id={`${data.id}-header-${cellIndex}`}
                    className='text-xs uppercase text-gray-500 mb-1 tracking-wide'
                  >
                    {data.headers[cellIndex]}
                  </div>
                  <div
                    className='text-sm text-black'
                    aria-labelledby={`${data.id}-header-${cellIndex}`}
                  >
                    {cell}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TableCell>
      </TableRow>
      {isExpanded && (
        <TableRow className='block'>
          <TableCell
            id={`row-${data.id}-details`}
            colSpan={data.headers.length}
            className='block p-0 text-sm border border-gray-300 border-t rounded-b-lg'
            role='region'
            aria-label={`Details for ${data.cells[0]}`}
            aria-live='polite'
          >
            <div className='pt-4 px-4 pb-4'>{data.details}</div>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
