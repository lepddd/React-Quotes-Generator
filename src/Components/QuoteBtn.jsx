import styled from "styled-components";
import { motion } from "framer-motion";

const StyledBtn = styled.button`
  border: 1px solid #3a86ff;
  padding: 8px 20px;
  border-radius: 99px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  color: #3a86ff;
`;

const QuoteBtn = ({ title, fetchData }) => {
  return (
    <StyledBtn as={motion.button} whileHover={{ x:[0,5,-5,0]}} onClick={fetchData}>
      {title}
    </StyledBtn>
  );
};

export default QuoteBtn;
