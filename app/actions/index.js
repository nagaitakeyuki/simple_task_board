import Types from '../utils/types'

export default {

  getSprints: () => ({
    type: Types.GET_SPRINTS
  }),

  setSprints: payload => ({
    type: Types.SET_SPRINTS,
    payload
  }),
  
  swithSprint: payload => ({
    type: Types.SWITCH_SPRINT,
    payload
  }),

  changeSortOrder: payload => ({
    type: Types.CHANGE_SORT_ORDER,
    payload
  }),

  setSortOrder: payload => ({
    type: Types.SET_SORT_ORDER,
    payload
  }),

  changeTaskStatus: payload => ({
    type: Types.CHANGE_TASK_STATUS,
    payload
  }),

  setTaskStatus: payload => ({
    type: Types.SET_TASK_STATUS,
    payload
  }),

  setTaskStatus: payload => ({
    type: Types.SET_TASK_STATUS,
    payload
  }),

  openSprintAdd: payload => ({
    type: Types.OPEN_SPRINT_ADD,
    payload
  }),

  closeSprintAdd: payload => ({
    type: Types.CLOSE_SPRINT_ADD,
    payload
  }),

  openTaskAdd: payload => ({
    type: Types.OPEN_TASK_ADD,
    payload
  }),

  closeTaskAdd: payload => ({
    type: Types.CLOSE_TASK_ADD,
    payload
  }),

  addSprint: payload => ({
    type: Types.ADD_SPRINT,
    payload
  }),

  addTasks: payload => ({
    type: Types.ADD_TASKS,
    payload
  }),

  setAddedTasks: payload => ({
    type: Types.SET_ADDED_TASKS,
    payload
  })



}
