import { ChevronDown, ChevronRight } from "lucide-react"

import type { TableData } from "../../types"
import { cn } from "../../lib/utils"
import { TableBody, TableCell, TableRow } from "../ui/table"

type TableProps = {
  data: TableData
  isExpanded: boolean
  onToggle: (id: string) => void
  showKeyboardFocus: boolean
  onFocus: (id: string) => void
  onBlur: (id: null) => void
  onMouseDown: (id: null) => void
}

export function DesktopTableRow({
  data,
  isExpanded,
  onToggle,
  showKeyboardFocus,
  onFocus,
  onBlur,
  onMouseDown,
}: TableProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onToggle(data.id)
    }
  }

  return (
    <TableBody
      className={cn({
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
        className='cursor-pointer outline-none bg-white hover:bg-gray-50 transition-colors'
      >
        <TableCell
          className={cn(
            "w-10 px-4 py-4 text-sm border border-gray-300 border-r-0 rounded-tl-lg",
            {
              "border-b-0": isExpanded,
              "rounded-bl-lg": !isExpanded,
            }
          )}
        >
          <span aria-hidden='true'>
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </span>
        </TableCell>
        {data.cells.map((cell, cellIndex) => (
          <TableCell
            key={`${data.id}-cell-${cellIndex}`}
            className={cn(
              "px-4 py-4 text-sm border-t border-b border-gray-300",
              {
                "border-r rounded-tr-lg": cellIndex === data.cells.length - 1,
                "rounded-br-lg":
                  cellIndex === data.cells.length - 1 && !isExpanded,
                "border-b-0": isExpanded,
              }
            )}
          >
            {cell}
          </TableCell>
        ))}
      </TableRow>
      {isExpanded && (
        <TableRow className='bg-white'>
          <TableCell
            id={`row-${data.id}-details`}
            colSpan={data.cells.length + 1}
            className='p-0 text-sm border border-gray-300 border-t rounded-bl-lg rounded-br-lg bg-white'
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
