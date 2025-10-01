import { Fragment, useEffect, useState } from "react"

import { Table, TableBody, TableHeader, TableRow } from "../ui/table"
import { ResponsiveTableRow } from "./responsive-table-row"
import { DesktopTableRow } from "./desktop-table-row"
import { getViewport } from "../../lib/utils"
import type { TableData } from "../../types"
import { headers, tableData } from "../../mock-data"

export function ExpandableTable() {
  const [expandedRows, setExpandedRows] = useState(new Set())
  const [keyboardFocusRow, setKeyboardFocusRow] = useState<string | null>(null)
  const [viewport, setViewport] = useState(getViewport(window.innerWidth))

  useEffect(() => {
    const handleResize = () => {
      setViewport(getViewport(window.innerWidth))
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleRow = (id: TableData["id"]) => {
    setExpandedRows((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const isDesktop = viewport === "desktop"

  return (
    <div className='p-8 font-sans min-h-screen'>
      <main aria-label='Data table section'>
        <Table
          className='w-full'
          style={{ borderCollapse: "separate", borderSpacing: 0 }}
          role='table'
          aria-label='Expandable data table'
        >
          <caption className='sr-only'>
            Data table with expandable rows. Press Enter or Space to expand row
            details.
          </caption>
          {isDesktop && (
            <TableHeader>
              <TableRow className='bg-gray-200'>
                <th className='p-2 px-4 text-left text-sm font-normal text-black bg-gray-200 rounded-l-lg'></th>
                {headers.map((header, index) => {
                  const isLast = headers.length - 1 === index
                  return (
                    <th
                      key={header}
                      scope='col'
                      className={`p-2 px-4 text-left text-sm font-normal text-black cursor-pointer  hover:bg-gray-300  bg-gray-200 ${
                        isLast ? "rounded-r-lg" : ""
                      }`}
                    >
                      {header}
                    </th>
                  )
                })}
              </TableRow>
            </TableHeader>
          )}
          {tableData.map((row) => (
            <Fragment key={row.id}>
              <TableBody aria-hidden='true'>
                <tr>
                  <td className='p-2' />
                </tr>
              </TableBody>

              {isDesktop ? (
                <DesktopTableRow
                  data={row}
                  isExpanded={expandedRows.has(row.id)}
                  onToggle={toggleRow}
                  showKeyboardFocus={keyboardFocusRow === row.id}
                  onFocus={setKeyboardFocusRow}
                  onBlur={setKeyboardFocusRow}
                  onMouseDown={setKeyboardFocusRow}
                />
              ) : (
                <ResponsiveTableRow
                  data={row}
                  isExpanded={expandedRows.has(row.id)}
                  onToggle={() => toggleRow(row.id)}
                  showKeyboardFocus={keyboardFocusRow === row.id}
                  onFocus={() => setKeyboardFocusRow(row.id)}
                  onBlur={() => setKeyboardFocusRow(null)}
                  onMouseDown={() => setKeyboardFocusRow(null)}
                />
              )}
            </Fragment>
          ))}
        </Table>
      </main>
    </div>
  )
}
