import { ExpandableTable } from "./components/expandable-table"
import type { Product } from "./types"

const INITIAL_STATE: Product[] = [
  {
    id: 101,
    productName: "Laptop Pro X",
    category: "Electronics",
    price: 1299.99,
    inStock: 15,
    status: "Available",
    lastRestock: "2024-08-15",
  },
  {
    id: 102,
    productName: "Mechanical Keyboard",
    category: "Accessories",
    price: 95.5,
    inStock: 50,
    status: "Low Stock",
    lastRestock: "2024-09-01",
  },
  {
    id: 103,
    productName: "4K Monitor 27in",
    category: "Electronics",
    price: 399.0,
    inStock: 0,
    status: "Out of Stock",
    lastRestock: "2024-07-20",
  },
]

const HEADERS = [
  "Product Name",
  "Category",
  "Price ($)",
  "In Stock",
  "Status",
  "Last Restock",
]
function App() {
  return <ExpandableTable headers={HEADERS} items={INITIAL_STATE} />
}

export default App
