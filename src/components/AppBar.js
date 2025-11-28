import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Appbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={isMobile ? 'column' : 'row'}
      alignItems="center"
      justifyContent={isMobile ? 'center' : 'space-between'}
      sx={{
        width: '100%',
        padding: '10px 20px',
        position: 'absolute',
        top: 0,
        left: 0,
        gap: '10px',
      }}
    >
      {/* Left Button */}
      <Button
        color="white"
        variant="text"
        sx={{ 
          color: 'white', 
          fontSize: 18, 
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        Explore Restaurants
      </Button>

      {/* Center SearchBar */}
      <SearchBar />

      {/* Right Buttons */}
      <Stack 
        direction={isMobile ? 'column' : 'row'} 
        spacing={2} 
        alignItems="center"
      >
        <Button
          variant="contained"
          sx={{
            color: 'black',
            borderColor: 'white',
            backgroundColor: '#AA8453',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          <img src="/ppl.png" alt="advisor" style={{ width: 100, height: 30, marginRight: 8 }} />
          Ask a restaurant advisor
        </Button>

        <Button
          variant="outlined"
          sx={{
            color: 'white',
            borderColor: 'white',
            flexShrink: 0,
            whiteSpace: 'nowrap',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
            },
          }}
        >
          Signin / Signup
        </Button>
      </Stack>
    </Stack>
  );
}
