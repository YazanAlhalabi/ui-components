import type { TableData } from "./types"

export const headers = ["One", "Two", "Three", "Four", "Five", "Six"]
export const tableData: TableData[] = [
  {
    id: "row-1",
    headers,
    cells: [
      "Cell content 1",
      "Cell content 2",
      "Cell content 3",
      "Cell content 4",
      "Cell content 5",
      "Cell content 6",
    ],
    details: "Row 1 details section",
  },
  {
    id: "row-2",
    headers,
    cells: [
      "Another cell content 1",
      "Another cell content 2",
      "Another cell content 3",
      "Another cell content 4",
      "Another cell content 5",
      "Another cell content 6",
    ],
    details: "Another row details",
  },
]
