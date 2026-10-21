import ExpenseTable from '../components/ExpenseTable';

const ExpenseList = ({ expenses, onDelete, onToggle }) => (
  <div>
    <h2>Danh sách khoản chi</h2>
    <div className="table-wrap">
      <ExpenseTable expenses={expenses} onDelete={onDelete} onToggle={onToggle} />
    </div>
  </div>
);

export default ExpenseList;
