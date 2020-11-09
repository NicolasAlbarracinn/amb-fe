import React from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch, useSelector } from 'react-redux';
import { profileSaga } from './saga';
import { actions, sliceKey, reducer } from './slice';
import UserProfile from 'pages/UserProfile/UserProfile';
import { selectAccount } from '../PrivateRoutes/selectors';

const Profile = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  const dispatch = useDispatch();
  const profile = useSelector(selectAccount);

  const handleSubmit = profile => {
    dispatch(actions.getUpdateProfileRequest(profile));
  };
  return <UserProfile handleSubmit={handleSubmit} formValues={profile} />;
};

export default Profile;
