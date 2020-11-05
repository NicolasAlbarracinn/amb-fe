import React from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { profileSaga } from './saga';
import { actions, sliceKey, reducer } from './slice';
import UserProfile from 'pages/UserProfile/UserProfile';

const Profile = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  const dispatch = useDispatch();
  const handleSubmit = profile => {
    dispatch(actions.getUpdateProfileRequest(profile));
  };
  return <UserProfile handleSubmit={handleSubmit} />;
};

export default Profile;
