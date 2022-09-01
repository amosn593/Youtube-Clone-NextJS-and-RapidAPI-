import { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './components/Videos';

function Search() {
  const [videos, setVideos] = useState(null);

  const router = useRouter();
  const { query } = router;

  const searchTerm = query.searchTerm;

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items),
    );
  }, [searchTerm]);
  return (
    <Box sx={{ backgroundColor: '#000' }} p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: '100px' }}
      >
        Search Results for{' '}
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
}

export default Search;
