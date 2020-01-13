import { differenceInMinutes } from 'date-fns'
import { useCoinloreInfo } from './use-coinlore-info'

export const useTimeDifference = () => {
  const { time } = useCoinloreInfo()
  const timeDifference = differenceInMinutes(
    new Date(Date.now()),
    new Date(time * 1000)
  )
  return timeDifference
}
