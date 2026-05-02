function FoodItem({ food, deleteFood, onEdit }) {
  const formattedDate = new Date(food.date).toLocaleDateString("id-ID");

  const formatCurrency = (num) => {
    if (!num) return "Rp 0";
    return "Rp " + Number(num).toLocaleString("id-ID");
  };

  return (
    <div className="food-item">
      <div>
        <b>{food.name}</b>
        <p style={{ color: "#9ca3af" }}>
          {food.calories} kcal • {food.time}
        </p>
        <p>{formatCurrency(food.price)}</p>
        <small>{formattedDate}</small>
      </div>

      <div className="actions">
        <button onClick={() => onEdit(food)}>Edit</button>
        <button onClick={() => deleteFood(food._id)}>X</button>
      </div>
    </div>
  );
}

export default FoodItem;