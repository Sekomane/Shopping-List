import React from "react";
import "../index.css"; 

interface ShoppingListCardProps {
  name: string;
  quantity: number;
  category: string;
  notes?: string;
  imageUrl?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const ShoppingListCard = ({
  name,
  quantity,
  category,
  notes,
  imageUrl,
  onEdit,
  onDelete,
}: ShoppingListCardProps) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={name} className="card-image" />}
      <h2 className="card-title">{name}</h2>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      {notes && <p>Notes: {notes}</p>}
      <div className="card-actions">
        <button onClick={onEdit} className="btn edit">Edit</button>
        <button onClick={onDelete} className="btn delete">Remove</button>
      </div>
    </div>
  );
};

export default ShoppingListCard;
