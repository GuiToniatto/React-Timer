import { ICycle } from '../../interfaces/ICycle'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  FINISH_CURRENT_CYCLE = 'FINISH_CURRENT_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: ICycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.FINISH_CURRENT_CYCLE,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}
