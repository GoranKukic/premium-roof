import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import styles from './LanguageSwitcher.module.css';

export default function LanguageSwitcher() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <div className={`${styles.inputWrapper}`}>
          <Select
            id="demo-simple-select"
            value={locale}
            inputProps={{ id: 'uncontrolled-native' }}
            onChange={changeLanguage}
            variant="standard"
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="sr">SR</MenuItem>
          </Select>
        </div>
      </FormControl>
    </Box>
  );
}
