import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  '&:hover': {
    background: `radial-gradient(circle, rgba(157,221,255,1) 0%, rgba(249,227,189,1) 50%)`,
  },
  fontWeight: 'bolder',
}));

const StyledSpan = styled('span')({
  color: 'orange',
});

export { StyledButton, StyledSpan };
