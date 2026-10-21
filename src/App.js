const BUILD_TAG = "mv-3358";
/* eslint-disable import/first */
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ExpenseList from "./pages/ExpenseList";
import AddExpense from "./pages/AddExpense";
import ExpenseDetail from "./pages/ExpenseDetail";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("/data/expenses.json", { signal: controller.signal })
      .then((res) => {
        setExpenses(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Không tải được dữ liệu");
        setLoading(false);
      });
  }, []);

  const addExpense = ({ title, amount, category, date }) => {
    setExpenses((prev) => {
      const newId = prev.reduce((max, e) => Math.max(max, e.id), 0) + 1;
      return [
        ...prev,
        { id: newId, title, amount, category, date, paid: false },
      ];
    });
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const togglePaid = (id) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, paid: !e.paid } : e)),
    );
  };

  return (
    <div className="app" data-build={BUILD_TAG}>
      <Routes>
        <Route path="/" element={<Layout loading={loading} error={error} />}>
          <Route index element={<Home />} />
          <Route
            path="expenses"
            element={
              <ExpenseList
                expenses={expenses}
                onDelete={deleteExpense}
                onToggle={togglePaid}
              />
            }
          />
          <Route
            path="expenses/new"
            element={<AddExpense onAdd={addExpense} />}
          />
          <Route
            path="expenses/:id"
            element={<ExpenseDetail expenses={expenses} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
