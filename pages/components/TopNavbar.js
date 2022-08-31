import Image from 'next/image';
import Link from 'next/link';
import { Stack } from '@mui/material';
import { logo } from '../../utils/constants';

const TopNavbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: '#000',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link href="/">
        <a>
          <Image src={logo} alt="log" width={45} height={45} />
        </a>
      </Link>
    </Stack>
  );
};

export default TopNavbar;
