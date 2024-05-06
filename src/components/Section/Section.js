import { HeadingTitle, StyledSection } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <HeadingTitle>{title}</HeadingTitle>
      {children}
    </StyledSection>
  );
};
