import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectStepsData } from 'containers/WizardContainer/selectors';
import { actions } from 'containers/Benefits/slice';
import { useWizardStep } from 'containers/WizardContainer/hooks';

const FileUpload = () => {
  const data = useSelector(selectStepsData);
  const { loadError, handleNext, handlePrevious } = useWizardStep({}, 'fileUpload');
  const dispatch = useDispatch();

  const handleGeneratePdf = () => {
    dispatch(actions.getPDFFileRequest(data));
  };

  return (
    <div>
      <button onClick={() => handleGeneratePdf()}>generate PDF</button>
    </div>
  );
};

export default FileUpload;
