import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import SearchBar from './SearchBar';

export default function Appbar() {
  return (
    <Stack
      direction="row"
        alignItems="center"
      sx={{
        width: '100%',
        padding: '10px 20px',
        position: 'absolute',
        top: 0,
        left: 0,
      }}    
    >
      {/* Left Button */}
      <Button
        color='white'
        variant="text"
        sx={{ color: 'white', fontSize: 18 }}
      >
        Explore Restaurants
      </Button>

      {/* Center SearchBar */}
      <SearchBar />

      {/* Right Outlined Button - White */}



      <Button
        variant="contained"
        sx={{
          color: 'black',
          borderColor: 'white',
          backgroundColor: '#AA8453',
            marginLeft: 10,
            

        }}
      >
        <img src="/ppl.png" alt="advisor" style={{ width: 100, height: 30, marginRight: 8 }} />
        Ask a resturant advisor
      </Button>

            <Button
        variant="outlined"
        sx={{
          color: 'white',
          borderColor: 'white',
            marginLeft: 2,
          '&:hover': {
            borderColor: 'white',
            backgroundColor: 'rgba(255,255,255,0.1)',
          }
        }}
      >
        Signin / Signup
      </Button>
    </Stack>
  );
}
