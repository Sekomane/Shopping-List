import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShoppingListCard from "../components/ShoppingListCard";
import { RootState } from "../redux/store";
import { addItem, updateItem, deleteItem } from "../redux/slices/shoppingSlice";

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  notes?: string;
  imageUrl?: string;
  dateAdded?: string;
}

type SortOption = "name-asc" | "name-desc" | "category-asc" | "category-desc" | "date-asc" | "date-desc";

const Home = () => {
  const dispatch = useDispatch();
  const shoppingListsRedux = useSelector((state: RootState) => state.shopping.lists);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const sortParam = (searchParams.get("sort") as SortOption) || "date-desc";

  const [newItem, setNewItem] = useState<Partial<ShoppingItem>>({});
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<ShoppingItem>>({});

  // Add new item
  const handleAdd = () => {
    if (!newItem.name || !newItem.quantity || !newItem.category) return;

    const item: ShoppingItem = {
      id: Date.now(),
      name: newItem.name,
      quantity: Number(newItem.quantity),
      category: newItem.category,
      notes: newItem.notes || "",
      imageUrl: newItem.imageUrl || "",
      dateAdded: new Date().toISOString(),
    };
    dispatch(addItem(item));
    setNewItem({});
  };

  // Save edited item
  const handleSave = (id: number) => {
    const updatedItem: ShoppingItem = {
      id,
      name: editData.name || "",
      quantity: editData.quantity || 0,
      category: editData.category || "",
      notes: editData.notes || "",
      imageUrl: editData.imageUrl || "",
      dateAdded: editData.dateAdded || new Date().toISOString(),
    };
    dispatch(updateItem(updatedItem));
    setEditingId(null);
  };

  // Delete item
  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  // Filter and sort
  const filtered = shoppingListsRedux
    .filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      switch (sortParam) {
        case "name-asc": return a.name.localeCompare(b.name);
        case "name-desc": return b.name.localeCompare(a.name);
        case "category-asc": return a.category.localeCompare(b.category);
        case "category-desc": return b.category.localeCompare(a.category);
        case "date-asc": return (a.dateAdded || "").localeCompare(b.dateAdded || "");
        case "date-desc": return (b.dateAdded || "").localeCompare(a.dateAdded || "");
        default: return 0;
      }
    });

  return (
    <div className="app-container flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 p-4">
        {/* Add Form */}
        <div className="add-form mb-4 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newItem.name || ""}
            onChange={e => setNewItem({ ...newItem, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newItem.quantity || ""}
            onChange={e => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Category"
            value={newItem.category || ""}
            onChange={e => setNewItem({ ...newItem, category: e.target.value })}
          />
          <input
            type="text"
            placeholder="Notes (optional)"
            value={newItem.notes || ""}
            onChange={e => setNewItem({ ...newItem, notes: e.target.value })}
          />
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={newItem.imageUrl || ""}
            onChange={e => setNewItem({ ...newItem, imageUrl: e.target.value })}
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            Add Item
          </button>
        </div>

        {/* Search and Sort */}
        <div className="search-sort flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearchParams({ search: e.target.value, sort: sortParam })}
            className="p-2 border rounded"
          />
          <select
            value={sortParam}
            onChange={e => setSearchParams({ search, sort: e.target.value })}
            className="p-2 border rounded"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="category-asc">Category (A-Z)</option>
            <option value="category-desc">Category (Z-A)</option>
            <option value="date-asc">Date Added (Oldest)</option>
            <option value="date-desc">Date Added (Newest)</option>
          </select>
        </div>

        {/* Shopping List Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map(item =>
            editingId === item.id ? (
              <div key={item.id} className="card p-4 border rounded flex flex-col gap-2">
                <input
                  type="text"
                  value={editData.name}
                  onChange={e => setEditData({ ...editData, name: e.target.value })}
                />
                <input
                  type="number"
                  value={editData.quantity}
                  onChange={e => setEditData({ ...editData, quantity: Number(e.target.value) })}
                />
                <input
                  type="text"
                  value={editData.category}
                  onChange={e => setEditData({ ...editData, category: e.target.value })}
                />
                <input
                  type="text"
                  value={editData.notes}
                  onChange={e => setEditData({ ...editData, notes: e.target.value })}
                />
                <input
                  type="text"
                  value={editData.imageUrl}
                  onChange={e => setEditData({ ...editData, imageUrl: e.target.value })}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    className="bg-blue-500 text-white p-1 rounded hover:bg-blue-600"
                    onClick={() => handleSave(item.id)}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-400 text-white p-1 rounded hover:bg-gray-500"
                    onClick={() => setEditingId(null)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <ShoppingListCard
                key={item.id}
                {...item}
                onEdit={() => {
                  setEditingId(item.id);
                  setEditData(item);
                }}
                onDelete={() => handleDelete(item.id)}
              />
            )
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
