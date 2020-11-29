import { toast } from 'react-toastify';
import bankData from './jsonData/banksData.json';

const getCbuValues = cbu => {
  const cbuArray = Array.from(String(cbu), Number);
  const code = cbuArray.slice(10, 14);
  const accountNumber = cbuArray.slice(14, 21).join('');
  const bankInfo = bankData.find(bank => bank.code === code.join(''));
  if (!!bankInfo) {
    return {
      accountNumber,
      officeName: bankInfo.officeName,
    };
  }
  toast.warning('No tenemos los datos de la sucursal indicada', {
    position: toast.POSITION.TOP_CENTER,
  });
  return;
};

export default getCbuValues;
