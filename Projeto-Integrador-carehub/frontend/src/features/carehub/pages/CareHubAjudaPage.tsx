import { Box, Container, Typography, Paper } from '@mui/material';
import { PageHeader } from '../components/PageHeader';

export default function CareHubAjudaPage() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <PageHeader 
        title="Precisa de Ajuda?"
        subtitle="Veja como utilizar o Sistema"
        backTo="/carehub"
      />

      <Paper elevation={3} sx={{ p: { xs: 3, sm: 5 }, borderRadius: 4 }}>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
            O texto explicativo sobre como usar o sistema será adicionado aqui em breve...
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
