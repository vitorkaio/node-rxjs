import { Observable } from 'rxjs'

let cont = 0

export const dataTime = () => {
  return Observable.create(obs => {
    setInterval(() => {
      cont !== 4 ? obs.next(Date.now()) : obs.complete()
      cont++
    }, 2e3)
  })
}
