// src/pages/UsersDetails.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const UsersDetails: React.FC = () => {
  const navigate = useNavigate();

  // بيانات وهمية للمستخدمين
  const users = [
    { id: 1, name: 'مستخدم 1', role: 'مدير', joinDate: '2023-01-01' },
    { id: 2, name: 'مستخدم 2', role: 'محرر', joinDate: '2023-02-01' },
  ];

  return (
    <div style={styles.container}>
      <h1>تفاصيل المستخدمين</h1>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        العودة إلى لوحة التحكم
      </button>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>الاسم</th>
              <th>الدور</th>
              <th>تاريخ الانضمام</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.joinDate}</td>
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

export default UsersDetails;