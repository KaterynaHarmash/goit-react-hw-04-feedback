import { StyledButton } from './Button.styled';

export const Button = ({ onLeaveFeedback, text }) => {
  return (
    <StyledButton
      onClick={evt => onLeaveFeedback(evt.target.value)}
      value={text}
    >
      {text}
    </StyledButton>
  );
};
