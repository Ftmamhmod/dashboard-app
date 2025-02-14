// src/components/StatCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface StatCardProps {
  title: string;
  value: number;
  to: string; 
}

const StatCard: React.FC<StatCardProps> = ({ title, value, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);  
  };

  return (
    <div style={styles.card} onClick={handleClick}>
      <h3>{title}</h3>
      <p style={styles.value}>{value}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center' as const,
    cursor: 'pointer'
  },
  value: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
};

export default StatCard;