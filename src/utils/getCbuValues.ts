import { toast } from 'react-toastify';
import bankData from './mocked/banksData.json';

const getCbuValues = cbu => {
  const cbuArray = Array.from(String(cbu), Number);
  const code = cbuArray.slice(10, 14).join('');
  const accountNumber = cbuArray.slice(14, 21).join('');
  const bankInfo = bankData.find(bank => bank.code === code);
  if (!!bankInfo) {
    return {
      bankAccountNumber: accountNumber,
      bankBranchName: bankInfo.officeName,
      bankBranchCode: code,
    };
  }
  toast.warning('No tenemos los datos de la sucursal indicada', {
    position: toast.POSITION.TOP_CENTER,
  });
  return;
};

export default getCbuValues;
