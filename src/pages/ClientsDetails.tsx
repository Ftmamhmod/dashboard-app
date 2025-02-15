// src/pages/ClientsDetails.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2'; // تأكيد الحذف

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const ClientsDetails: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [clients, setClients] = useState<Client[]>([
    { id: 1, name: 'Client 1', email: 'client1@example.com', phone: '123456789' },
    { id: 2, name: 'Client 2', email: 'client2@example.com', phone: '987654321' },
  ]);

  // دالة حذف العميل
  const handleDelete = (id: number) => {
    Swal.fire({
      title: t('clients.deleteConfirm'),
      text: t('clients.deleteWarning'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: t('clients.delete'),
      cancelButtonText: t('clients.cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);
        Swal.fire(
          t('clients.deleted'),
          t('clients.deleteSuccess'),
          'success'
        );
      }
    });
  };

  return (
    <div style={styles.container}>
      <h1>{t('clients.title')}</h1>
      <button onClick={() => navigate('/')} style={styles.backButton}>
        {t('dashboard.back')}
      </button>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>{t('clients.name')}</th>
              <th>{t('clients.email')}</th>
              <th>{t('clients.phone')}</th>
              <th>{t('clients.actions')}</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(client.id)}
                    style={styles.deleteButton}
                  >
                    {t('clients.delete')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// إضافة الأنماط الجديدة
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  tableContainer: {
    overflowX: 'auto',
    marginTop: '20px',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  backButton: {
    backgroundColor: '#3085d6',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
};

export default ClientsDetails;