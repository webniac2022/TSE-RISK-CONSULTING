import {
  StyledButton,
  StyledSpan,
} from '../StyledComponents/styled-components';
import Typography from '@mui/material/Typography';
import Link from '../Link/link';

function Author() {
  return (
    <StyledButton
      variant="text"
      component={Link}
      href="https://www.webniac.ro"
      target="_blank"
      rel="noopener"
      aria-label="Designed by WEBNIAC"
    >
      <Typography variant="h6" fontWeight="bolder">
        Designed by WEBNIAC<StyledSpan>.</StyledSpan>
      </Typography>
    </StyledButton>
  );
}
export default Author;
