import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FoodForm({ fetchFoods, fetchSummary, editingFood }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        calories: "",
        price: "",
        time: "pagi",
        date: "",
    });

  useEffect(() => {
    if (editingFood) {
      setForm({
        ...editingFood,
        date: editingFood.date?.slice(0, 10),
      });
    }
  }, [editingFood]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formatRupiah = (value) => {
    if (value === null || value === undefined) return "";

    const stringValue = String(value);
    const number = stringValue.replace(/\D/g, "");

    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

  const handlePriceChange = (e) => {
    const raw = e.target.value.replace(/\D/g, "");
    setForm({
      ...form,
      price: raw, 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      price: Number(form.price), 
      date: form.date ? new Date(form.date) : new Date(),
    };

    if (editingFood) {
        await fetch(`${process.env.REACT_APP_API_URL}/api/foods/${editingFood._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
    });
        navigate("/list");
    } else {
      await fetch(`${process.env.REACT_APP_API_URL}/api/foods`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }

    setForm({
      name: "",
      calories: "",
      price: "",
      time: "pagi",
      date: "",
    });

    fetchFoods();
    if (fetchSummary) fetchSummary();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nama makanan" value={form.name} onChange={handleChange} />
      <input name="calories" placeholder="Kalori" value={form.calories} onChange={handleChange} />

      <input
        name="price"
        placeholder="Harga (Rp)"
        value={formatRupiah(form.price)}
        onChange={handlePriceChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <select name="time" value={form.time} onChange={handleChange}>
        <option value="pagi">Pagi</option>
        <option value="siang">Siang</option>
        <option value="malam">Malam</option>
      </select>

      <button className="btn">
        {editingFood ? "Update" : "Tambah"}
      </button>
    </form>
  );
}

export default FoodForm;