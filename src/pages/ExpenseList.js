import { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import ExpenseTable from '../components/ExpenseTable';

const ExpenseList = ({ expenses, onDelete, onToggle }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Tất cả');
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleQueryShift = (e) => setQuery(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const isMobile = width < 768;

  const filtered = expenses
    .filter((e) => e.title.toLowerCase().includes(query.trim().toLowerCase()))
    .filter((e) => category === 'Tất cả' || e.category === category);

  return (
    <div>
      <h2>Danh sách khoản chi</h2>
      <p>Chế độ: {isMobile ? 'Điện thoại' : 'Máy tính'}</p>
      <FilterBar
        query={query}
        category={category}
        onQueryChange={handleQueryShift}
        onCategoryChange={handleCategoryChange}
      />
      <p>Tìm thấy {filtered.length} khoản chi</p>
      <div className={`table-wrap${isMobile ? ' mobile' : ''}`}>
        <ExpenseTable expenses={filtered} onDelete={onDelete} onToggle={onToggle} />
      </div>
    </div>
  );
};

export default ExpenseList;
