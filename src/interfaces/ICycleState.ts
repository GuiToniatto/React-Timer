import { ICycle } from './ICycle'

export interface ICycleState {
  cycles: ICycle[]
  activeCycleId: string | null
}
