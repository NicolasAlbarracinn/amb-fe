import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';

import Search from '@material-ui/icons/Search';

import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

import { useStyles } from './styles';

const SearchBar = (props: { rtlActive?: string; placeholder?: string }) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  const classes = useStyles();
  const dispatch = useDispatch();

  const searchButton = classNames(classes.top, classes.searchButton, {
    [classes.searchRTL]: props.rtlActive,
  });

  const handleOnChange = ({ currentTarget: { value } }: FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    dispatch(actions.updateSearchParameter({ searchParameter: value }));
  };

  const handleSubmit = () => {
    dispatch(actions.updateSubmitParameter({ submited: true }));
  };

  return (
    <div>
      <CustomInput
        formControlProps={{
          className: classes.top + ' ' + classes.search,
        }}
        inputProps={{
          placeholder: props.placeholder || 'Buscar',
          inputProps: {
            'aria-label': 'Buscar',
            className: classes.searchInput,
          },
          onChange: handleOnChange,
        }}
      />
      <Button onClick={handleSubmit} color="white" aria-label="edit" justIcon round className={searchButton}>
        <Search className={classes.headerLinksSvg + ' ' + classes.searchIcon} />
      </Button>
    </div>
  );
};

export default SearchBar;
