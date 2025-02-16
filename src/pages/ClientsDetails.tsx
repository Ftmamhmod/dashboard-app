import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    { id: 3, name: 'Client 3', email: 'client3@example.com', phone: '987654321' },
  ]);

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
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          {t('clients.title')}
        </Typography>
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/')}
          sx={{ textTransform: 'none' }}
        >
          {t('dashboard.back')}
        </Button>
      </Box>

      <TableContainer component={Paper} sx={{ maxHeight: 'calc(100vh - 200px)', overflowX: 'auto' }}>
        <Table stickyHeader aria-label="clients table">
          <TableHead>
            <TableRow>
              <TableCell>{t('clients.name')}</TableCell>
              <TableCell>{t('clients.email')}</TableCell>
              <TableCell>{t('clients.phone')}</TableCell>
              <TableCell align="center">{t('clients.actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients.map((client) => (
              <TableRow
                key={client.id}
                hover
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {client.name}
                </TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell>{client.phone}</TableCell>
                <TableCell align="center">
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(client.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ClientsDetails;