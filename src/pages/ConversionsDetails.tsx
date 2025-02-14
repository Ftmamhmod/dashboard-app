
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConversionsDetails: React.FC = () => {
  const navigate = useNavigate();


  const conversions = [
    { id: 1, date: '2023-01-01', amount: 100, status: 'مكتمل' },
    { id: 2, date: '2023-02-01', amount: 200, status: 'قيد الانتظار' },
  ];

  return (
    <div style={styles.container}>
      <h1>تفاصيل التحويلات</h1>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        العودة إلى لوحة التحكم
      </button>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>المبلغ</th>
              <th>الحالة</th>
            </tr>
          </thead>
          <tbody>
            {conversions.map((conversion) => (
              <tr key={conversion.id}>
                <td>{conversion.date}</td>
                <td>{conversion.amount}</td>
                <td>{conversion.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    direction: 'rtl' as const,
  },
  backButton: {
    marginBottom: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  tableContainer: {
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};

export default ConversionsDetails;