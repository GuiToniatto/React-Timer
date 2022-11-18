import { ICreateCycleData } from './ICreateCycleData'
import { ICycle } from './ICycle'

export interface ICyclesContext {
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  cycles: ICycle[]
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: ICreateCycleData) => void
  interruptCurrentCycle: () => void
}
