import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { FundManager } from '@/components/FundManager';

import styles from './page.module.css';

export default function Home() {
  return (
    <Container className={styles.page}>
      <Box component="main" className={styles.main}>
        <Typography variant="h1">AJ Bell Fund Selection</Typography>

        <FundManager />
      </Box>
    </Container>
  );
}
