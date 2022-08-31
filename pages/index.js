import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import SideBar from './components/SideBar';
import Videos from './components/Videos';

import { fetchFromAPI } from '../utils/fetchFromAPI';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(function (data) {
        console.log(data);
        setVideos(data.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        setVideos([]);
      });
  }, [selectedCategory]);

  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Head>
          <title>Youtube Clone</title>
          <meta
            name="description"
            content="Youtube Clone created using Nextjs and Material UI"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          sx={{
            height: { sx: 'auto', md: '92vh' },
            borderRight: '1px solid #3d3d3d',
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: '#fff' }}
          >
            Copyright © Amos Ndonga
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: 'white' }}
          >
            {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
          </Typography>

          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
}
