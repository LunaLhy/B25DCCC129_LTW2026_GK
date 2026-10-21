import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddExpense = ({ onAdd }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || amount === '' || !category || !date) {
      setMessage('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    onAdd({ title: title.trim(), amount: Number(amount), category, date });
    navigate('/expenses', { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Thêm khoản chi</h2>
      <div>
        <label htmlFor="title">Tên khoản chi</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label htmlFor="amount">Số tiền</label>
        <input id="amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label htmlFor="category">Danh mục</label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Ngày chi</label>
        <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button type="submit">Thêm</button>
      {message && <p className="error">{message}</p>}
    </form>
  );
};

export default AddExpense;
