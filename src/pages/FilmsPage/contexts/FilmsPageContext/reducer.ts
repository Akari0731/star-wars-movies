import { FilmsPageState } from '.';
import { SortOrder } from '../../../../components/Table';
import { FilmsPageAction, FilmsPageActionType } from './actions';

export const filmsPageReducer = (
  state: FilmsPageState,
  action: FilmsPageAction
): FilmsPageState => {
  switch (action.type) {
    case FilmsPageActionType.FILTER: {
      return { ...state, searchText: action.searchText, selectedFilmId: undefined };
    }

    case FilmsPageActionType.SORT: {
      const sortOrder =
        action.sortBy === state.sortKey
          ? state.sortOrder === SortOrder.ASC
            ? SortOrder.DESC
            : SortOrder.ASC
          : SortOrder.ASC;
      return { ...state, sortKey: action.sortBy, sortOrder };
    }

    case FilmsPageActionType.SELECT: {
      return {
        ...state,
        selectedFilmId: state.selectedFilmId === action.episode_id ? undefined : action.episode_id
      };
    }

    default:
      return state;
  }
};
