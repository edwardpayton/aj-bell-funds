import { Button, List, ListItem, Typography } from '@mui/material';

import { Documents as DocumentsType } from '@/types';

import styles from './styles.module.css';

export type Props = {
  documents: DocumentsType[];
};

export function Documents({ documents }: Props) {
  return (
    <>
      <Typography variant="h3">Documents</Typography>

      <List className={styles.list}>
        {documents.map(({ id, type, url }) => (
          <ListItem key={id} className={styles['list-item']}>
            <Typography variant="h6">{type}</Typography>
            <Button
              variant="outlined"
              href={url}
              target="_blank"
              download
              className={styles.button}
            >
              Download document
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
