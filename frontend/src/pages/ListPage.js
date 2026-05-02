import { useEffect, useState } from "react";
import FoodItem from "../components/FoodItem";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:5000/api/foods");
    const data = await res.json();
    setFoods(data);
  };

  const deleteFood = async (id) => {
    await fetch(`http://localhost:5000/api/foods/${id}`, {
      method: "DELETE",
    });
    fetchFoods();
  };

  const handleEdit = (food) => {
    navigate("/", { state: food }); 
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  return (
    <>
    <h3 className="list-title">List Makanan</h3>
    
    <div className="list-container">
        {foods.map((food) => (
            <FoodItem
            key={food._id}
            food={food}
            deleteFood={deleteFood}
            onEdit={handleEdit}
            />
        ))}
    </div>
     </>
  );
}   

export default ListPage;