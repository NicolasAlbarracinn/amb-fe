import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects'; // select, delay
import Cookies from 'universal-cookie';
import moment from 'moment';

import { request } from 'utils/request';
import { BENEFITS_URL } from 'utils/endpoints';
import { IPartnerDetail } from 'features/partners/types';
import { IplanList } from 'features/portfolios/types';
import { GenderList, CivilStateList, PartnerStatusList, MinisteriesMap } from 'utils/constants';

import { actions } from '../store/slice';
import { IBenefit } from '../types';

const cookies = new Cookies();

//TODO: move each function to it owns file

export function* getBenefitDetail(action: PayloadAction<number>) {
  const token = cookies.get('token');

  const requestURL = `${BENEFITS_URL}/detail/${action.payload}`;
  try {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const response = yield call(request, requestURL, requestOptions);
    const parsedResponse = benefitDetailsTransformer(response.data);
    yield put(actions.getBenefitDetailSuccess(parsedResponse));
  } catch (err) {
    yield put(actions.getBenefitDetailFailed());
    toast.error(err.message, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
}

const benefitDetailsTransformer = (response: IBenefitResponse): IBenefit => ({
  benefitId: response.benefitId,
  lotNumber: response.lotNumber,
  benefitType: response.benefitType,
  certificateNumber: response.certificateNumber,
  applicationDate: response.applicationDate,
  portfolio: response.portfolio,
  plan: response.plan.plan,
  signatureAmount: response.signatureAmount,
  duesQuantity: response.duesQuantity,
  duesAmount: response.duesAmount,
  amountGranted: response.amountGranted,
  observations: response.observations,
  benefitStatus: response.benefitStatus,
  grantedPeriod: response.grantedPeriod,
  fileGranted: response.fileGranted,
  statusDate: response.statusDate,
  commercializer: response.commercializer,
  partnerObjectId: '',
  distributionDetail: {
    repartition: MinisteriesMap.get(response.partner.workInfo.repartition) || '',
    distributionCode: '',
    dependence: '',
    fileNumber: response.partner.workInfo.fileNumber,
    fileItem: response.partner.workInfo.fileItem,
    paymentType: response.partner.personalData.paymentType,
    recoveryPaymentType: response.partner.personalData.recoveryPaymentType,
    bankName: response.partner.workInfo.bankName,
    cbu: response.partner.workInfo.cbu,
    bankBranchName: response.partner.workInfo.bankBranchName,
    bankAccountNumber: response.partner.workInfo.bankBranchCode,
    programCode: '',
    sequenceNumber: '',
  },
  partnerDetail: {
    partnerId: response.partner.partnerId.toString(),
    name: response.partner.personalData.name,
    lastName: response.partner.personalData.lastName,
    admissionDate: moment(response.partner.createdAt).format('DD/MM/YYYY'),
    documentType: response.partner.personalData.documentType,
    documentNumber: response.partner.personalData.documentNumber,
    gender: GenderList[response.partner.personalData.gender],
    cuil: response.partner.personalData.cuil,
    civilState: CivilStateList[response.partner.personalData.civilState],
    status: PartnerStatusList[response.partner.status],
    email: response.partner.personalData.email,
  },
});

export interface IBenefitResponse {
  benefitId: number;
  lotNumber?: string;
  benefitType: string;
  certificateNumber: string;
  applicationDate: string;
  portfolio: string;
  plan: IplanList;
  signatureAmount: string;
  duesQuantity: string;
  duesAmount: string;
  amountGranted: string;
  observations: string;
  benefitStatus: string;
  grantedPeriod: string;
  fileGranted: string;
  statusDate: string;
  paymentMethod: string;
  paymentMethodRecovery: string;
  commercializer: string;
  partner: IPartnerDetail;
}

//Response example
// {
//     _id: 6043d3e91ab4a73be8cdb160,
//     benefitType: 'cm',
//     certificateNumber: '1',
//     applicationDate: '03/06/2021',
//     portfolio: 'Ayudas economicas',
//     plan: {
//       portfolioTypes: 'Ayudas economicas',
//       _id: 6027f9de26563a095859226a,
//       plan: 'PLAN 02/21-PLQ',
//       amountGranted: 10000,
//       signatureAmount: 10000,
//       dues: [ [Object], [Object] ],
//       lender: 600f7b02cf74854340280788,
//       __v: 0,
//       createdAt: 2021-02-13T16:10:06.499Z,
//       updatedAt: 2021-02-13T16:10:06.499Z
//     },
//     signatureAmount: '10000',
//     duesQuantity: '3',
//     duesAmount: '3333.33',
//     amountGranted: '10000',
//     observations: 'no contine',
//     benefitStatus: 'ps',
//     commercializer: 'jp lorek',
//     grantedPeriod: '1',
//     fileGranted: '12312312',
//     statusDate: '03/06/2021',
//     paymentMethod: 'dbic',
//     paymentMethodRecovery: 'db',
//     benefitId: 36,
//     partner: {
//       personalData: {
//         birthPlace: 'argentina',
//         civilState: 's',
//         country: 'argentina',
//         cuil: '20382781727',
//         documentNumber: '38278164',
//         documentType: 'dni',
//         email: 'nicodare@gmail.com',
//         gender: 'm',
//         lastName: 'Albarracin',
//         name: 'Nicolas',
//         netSalary: 11000,
//         personalPhone: '1562685678',
//         phone: '1562685678',
//         procedureNumber: '2723394152',
//         salary: 160000,
//         socialQuota: '6000',
//         paymentType: 'haberes',
//         recoveryPaymentType: 'haberes'
//       },
//       address: {
//         aptNumber: 'C',
//         department: 'Villa Urquiza',
//         floor: '5to',
//         location: 'CABA',
//         observations: '1562685678',
//         postalCode: '1431',
//         province: 'Buenos Aires',
//         streetAddress: 'Miller 2330'
//       },
//       workInfo: {
//         repartition: 'secretariaLegalTécnica',
//         fileNumber: '212313',
//         fileItem: '2223',
//         cbu: '0140339603640608878702',
//         bankAccountNumber: '0887870',
//         bankBranchName: '25 DE MAYO',
//         bankBranchCode: '6406',
//         bankName: 'Banco Provincia de Buenos Aires'
//       },
//       status: 'a',
//       _id: 604004820ec5433be0443974,
//       partnerId: 1,
//       createdBy: 5f8f02d7e64b4536dc901cb4,
//       createdAt: 2021-03-03T21:49:54.045Z,
//       updatedAt: 2021-03-03T21:49:54.045Z,
//       __v: 0
//     },
//     createdBy: 5f8f02d7e64b4536dc901cb4,
//     createdAt: 2021-03-06T19:11:37.264Z,
//     updatedAt: 2021-03-06T19:11:37.264Z,
//     __v: 0
//   }
