import styled from "styled-components";

const StyledQuotes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;
  box-shadow: 5px 5px 0px #000000;
  border-radius: 10px;
  background: #ffffff;
  color: #404040;
  font-weight: 500;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  font-size: 20px;
  text-align: center;
`;

const QuotesBox = ({ quote, children }) => {
  return (
    <StyledQuotes>
      {quote}
      {children}
    </StyledQuotes>
  );
};

export default QuotesBox;
