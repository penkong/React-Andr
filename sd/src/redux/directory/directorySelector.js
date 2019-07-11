import { createSelector } from 'reselect';

// it pull out of whole state in combine reducer only direcroy
const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
  [selectDirectory],
  directory => directory.sections
)