import React from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { useDispatch } from 'react-redux';
import { profileSaga } from './saga';
import { actions, sliceKey, reducer } from './store/slice';
import ProfileContainer from './containers/ProfileContainer';

const Profile = () => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: profileSaga });

  const dispatch = useDispatch();
  const handleSubmit = profile => {
    dispatch(actions.getUpdateProfileRequest(profile));
  };
  return <ProfileContainer handleSubmit={handleSubmit} />;
};

export default Profile;
