import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, onDelete, onToggle }) => (
  <table>
    <thead>
      <tr>
        <th>Khoản chi</th>
        <th>Số tiền</th>
        <th>Danh mục</th>
        <th>Ngày</th>
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

export default ExpenseTable;
