import React, { useEffect } from 'react';
import classname from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer } from 'utils/redux-injectors';
import { sliceKey, reducer, actions } from './slice';
import { selectLimit, selectOffset } from './selectors';

import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';

import { useStyles } from './styles';

interface IPaginationProps {
  totalItems: number;
  numberOfRowsData: Array<number>;
}

const calculatePageAmount = (itemsPerPage: number, totalItems: number) => {
  const pageAmount = Math.ceil(totalItems / itemsPerPage);
  return Array.from(Array(pageAmount), (_, i) => i + 1);
};

const Pagination = ({ totalItems, numberOfRowsData }: IPaginationProps) => {
  const classes = useStyles();

  useInjectReducer({ key: sliceKey, reducer: reducer });
  const dispatch = useDispatch();

  const offset = useSelector(selectOffset);
  const limit = useSelector(selectLimit);

  const [numberOfRows, setNumberOfRows] = React.useState(10);
  const [pageSelect, setPageSelect] = React.useState(0);

  useEffect(() => {
    dispatch(actions.updateOffset({ offset: pageSelect * limit }));
  }, [dispatch, limit, pageSelect]);

  useEffect(() => {
    dispatch(actions.updateLimit({ limit: numberOfRows }));
  }, [dispatch, numberOfRows]);

  const handleLimitChange = (limit: number) => {
    setNumberOfRows(limit);
  };

  const handleOffsetChange = (page: number) => {
    setPageSelect(page);
  };

  const handleNextPage = () => {
    setPageSelect(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPageSelect(prevState => prevState + -1);
  };

  return (
    <div className="pagination-top">
      <div className="-pagination">
        <div className={classes.center}>
          <GridContainer className={classes.gridContainer}>
            <GridItem xs={12} sm={3}>
              <button
                type="button"
                onClick={() => handlePreviousPage()}
                disabled={offset + 1 === 1}
                className={offset + 1 === 1 ? classname([classes.btn, classes.btnDisabled]) : classes.btn}
              >
                Anterior
              </button>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <FormControl fullWidth className={classes.selectFormControl + ' ' + classes.formControlMargins}>
                <Select
                  disabled={false}
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={pageSelect}
                  onChange={({ target: { value } }) => handleOffsetChange(value as number)}
                  inputProps={{
                    name: 'pageSelect',
                    id: 'page-select',
                  }}
                >
                  {calculatePageAmount(limit, totalItems).map((prop, key) => {
                    return (
                      <MenuItem
                        key={key}
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value={key}
                      >
                        Pagina {key + 1}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={6} md={3}>
              <FormControl fullWidth className={classes.selectFormControl + ' ' + classes.formControlMargins}>
                <Select
                  MenuProps={{
                    className: classes.selectMenu,
                  }}
                  classes={{
                    select: classes.select,
                  }}
                  value={numberOfRows}
                  onChange={({ target: { value } }) => {
                    handleLimitChange(value as number);
                  }}
                  inputProps={{
                    name: 'numberOfRows',
                    id: 'number-of-rows',
                  }}
                >
                  {numberOfRowsData.map(prop => {
                    return (
                      <MenuItem
                        key={prop}
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value={prop}
                      >
                        {prop} filas
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </GridItem>
            <GridItem xs={12} sm={3}>
              <button
                type="button"
                onClick={() => handleNextPage()}
                disabled={pageSelect >= Math.ceil(totalItems / limit) - 1}
                className={
                  pageSelect >= Math.ceil(totalItems / limit) - 1
                    ? classname([classes.btn, classes.btnDisabled])
                    : classes.btn
                }
              >
                Proximo
              </button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
