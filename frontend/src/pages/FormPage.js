import FoodForm from "../components/FoodForm";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCallback } from "react";

function FormPage() {
  const [summary, setSummary] = useState({
    totalCalories: 0,
    totalPrice: 0,
    totalMeals: 0,
  });

  const [range, setRange] = useState("today");

    const fetchSummary = useCallback(async () => {
    const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/foods/summary?range=${range}`
    );
    const data = await res.json();
    setSummary(data);
    }, [range]);

    useEffect(() => {
        fetchSummary();
    }, [fetchSummary]);

  const formatCurrency = (num) => {
    return "Rp " + Number(num).toLocaleString("id-ID");
  };

  const location = useLocation();
  const editingFood = location.state || null;

  const fetchFoods = () => {};

  return (
    <>
    <div className="summary-box">
        <div className="summary-tabs">
            <span
            className={range === "today" ? "active" : ""}
            onClick={() => setRange("today")}
            >
            Today
            </span>

            <span
            className={range === "7days" ? "active" : ""}
            onClick={() => setRange("7days")}
            >
            7 Days
            </span>

            <span
            className={range === "30days" ? "active" : ""}
            onClick={() => setRange("30days")}
            >
            30 Days
            </span>
        </div>

        <div className="summary-content">
            <span>{summary.totalMeals} meals</span>
            <span>{summary.totalCalories} kcal</span>
            <span>{formatCurrency(summary.totalPrice)}</span>
        </div>
    </div>

      <FoodForm
        fetchFoods={fetchFoods}
        fetchSummary={fetchSummary}
        editingFood={editingFood}
      />
    </>
  );
}

export default FormPage;