interface ShoppingListCardProps {
  name: string;
  quantity: number;
  category: string;
  notes?: string;
  imageUrl?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ShoppingListCard = ({ name, quantity, category, notes, imageUrl, onEdit, onDelete }: ShoppingListCardProps) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      {imageUrl && <img src={imageUrl} alt={name} className="w-full h-32 object-cover mb-2 rounded" />}
      <h2 className="font-bold">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      {notes && <p>Notes: {notes}</p>}
      <div className="flex justify-end mt-2 gap-2">
        <button onClick={onEdit} className="bg-yellow-400 p-1 rounded hover:bg-yellow-500">Edit</button>
        <button onClick={onDelete} className="bg-red-500 p-1 rounded text-white hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default ShoppingListCard;
