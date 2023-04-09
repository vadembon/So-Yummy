import { BtnDel } from './ButtonDelete.styled';
import { RiDeleteBinLine } from 'react-icons/ri';

export const ButtonDel = ({ handleDelete }) => {
  return (
    <>
      <BtnDel handleDelete={handleDelete}>
        <RiDeleteBinLine />
      </BtnDel>
    </>
  );
};
