import { dataTime } from './src/data'

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

dataTime().subscribe(obs)
