import { takeLatest } from 'redux-saga/effects'; // select, delay
import { actions } from '../store/slice';
import { setBenefitRequest } from './createBenefit';
import { deleteBenefit } from './deleteBenefit';
import { getBenefitDetail } from './fetchBenefitData';
import { getBenefitList } from './fetchBenefitList';
import { getPartnerInformation } from './fetchPartnerInformation';
import { getPlanById } from './fetchPlanById';
import { getPlanList } from './fetchPlanList';
import { getPDFFileRequest } from './generatePDF';
import { updateBenefit } from './updateBenefit';
import { updateBenefitStatus } from './updateBenefitStatus';

export function* benefitsSaga() {
  yield takeLatest(actions.getPartnerInformationRequest.type, getPartnerInformation);
  yield takeLatest(actions.setBenefitRequest.type, setBenefitRequest);
  yield takeLatest(actions.getPlanListRequest.type, getPlanList);
  yield takeLatest(actions.getPlanRequest.type, getPlanById);
  yield takeLatest(actions.getBenefitListRequest.type, getBenefitList);
  yield takeLatest(actions.getBenefitDetailRequest.type, getBenefitDetail);
  yield takeLatest(actions.updateBenefitStatusRequest.type, updateBenefitStatus);
  yield takeLatest(actions.deleteBenefitRequest.type, deleteBenefit);
  yield takeLatest(actions.updateBenefitRequest.type, updateBenefit);
  yield takeLatest(actions.getPDFFileRequest.type, getPDFFileRequest);
}
