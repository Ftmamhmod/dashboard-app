// src/pages/ClientsDetails.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ClientsDetails: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const clients = [
    { id: 1, name: "عميل 1", email: "client1@example.com", phone: "123456789" },
    { id: 2, name: "عميل 2", email: "client2@example.com", phone: "987654321" },
  ];

  return (
    <div style={styles.container}>
      <h1>{t("clients.title")}</h1>
      <button onClick={() => navigate("/")} style={styles.backButton}>
      {  t('dashboard.back')}
      </button>
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>{t('clients.name')}</th>
              <th>{t('clients.email')}</th>
              <th>{t('clients.phone')}</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
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
    padding: "20px",
    direction: "rtl" as const,
  },
  backButton: {
    marginBottom: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  tableContainer: {
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse" as const,
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};

export default ClientsDetails;
