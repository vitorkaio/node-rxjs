import { dataTime } from './src/data'
import { delay } from 'rxjs/operators'

const obs = {
  next: (data) => {
    console.log(data)
  },
  error: (err) => {
    console.log(err)
  },
  complete: () => {
    console.log('complete')
  }
}

// dataTime().subscribe(obs)

// delay de 5s para começar.
dataTime().pipe(delay(5e3)).subscribe(obs)
