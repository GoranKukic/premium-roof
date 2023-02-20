import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useRouter } from 'next/router';
import en from '../../locales/en';
import sr from '../../locales/sr';
import styles from './LanguageSwitcher.module.css';
import { v4 as uuidv4 } from 'uuid';

interface LanguageSwitcherProps {
  ariaId: string;
  id: string;
}
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ ariaId, id }) => {

  const [generatedId] = useState(`language-switcher-${id}-${uuidv4()}`);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : sr;
  
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  // const changeLanguage = (e) => {
  //   const locale = e.target.value;
  //   const path = locale + router.pathname;
  //   router.replace(path, path, { locale });
  // };
  
  return (
    <div id={generatedId}>
      <Box sx={{ minWidth: 50 }} className="relative">
        <FormControl fullWidth>
          <div className={`${styles.inputWrapper} relative group`}>
            <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue transition-all group-hover:w-full"></span>
            <Select
              id={generatedId + "selectId"}
              aria-labelledby={ariaId}
              value={locale}
              inputProps={{ id: generatedId + "inputId" }}
              onChange={changeLanguage}
              variant="standard"
              className="text-gray"
            >
              <MenuItem value="en" className="text-gray">
                EN
              </MenuItem>
              <MenuItem value="sr" className="text-gray">
                SR
              </MenuItem>
            </Select>
          </div>
        </FormControl>
      </Box>
    </div>
  );
};

export default LanguageSwitcher;


