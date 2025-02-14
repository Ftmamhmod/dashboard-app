// src/Dashboard.tsx
import React from 'react';
import { Grid } from '@mui/material';
import StatCard from './components/StatCard';
import MainChart from './components/MainChart';
import { statsData, chartData } from './data';
import { useTranslation } from 'react-i18next';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      <h1>{t('dashboard.title')}</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title={t('dashboard.clients')} value={statsData.clients} to="/clients" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title={t('dashboard.conversions')} value={statsData.conversions} to="/conversions" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title={t('dashboard.users')} value={statsData.users} to="/users" />
        </Grid>

        <Grid item xs={12}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
            <h2>{t('dashboard.timeline')}</h2>
            <MainChart data={chartData} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;