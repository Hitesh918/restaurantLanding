import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#363636',
  paddingLeft: theme.spacing(1),      // 🔥 Fix: gives breathing space to icon
  paddingRight: theme.spacing(1),
  width: '100%',
  maxWidth: 300,                      // 🔥 Fix: limits max width
  height: 45,                          // nice consistent height
  display: 'flex',
  alignItems: 'center',
  marginLeft: theme.spacing(39),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(1),       // 🔥 Fix: this creates proper gap
  display: 'flex',
  alignItems: 'center',
  color: 'white',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch'
    },
  },
}));

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      <StyledInputBase
        placeholder="Search by restaurant name"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}
