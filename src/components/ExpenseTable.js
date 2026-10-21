import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, onDelete, onToggle }) => {
  if (expenses.length === 0) return <p>Không có dữ liệu</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>Khoản chi</th>
          <th>Số tiền</th>
          <th className="col-category">Danh mục</th>
          <th className="col-date">Ngày</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((e) => (
          <ExpenseRow key={e.id} expense={e} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
