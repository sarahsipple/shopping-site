import { createSelector } from 'reselect';

const selectDirectly = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectly],
    directory => directory.sections
);