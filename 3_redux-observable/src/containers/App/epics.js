import { Observable } from 'rxjs'

export const searchUsers = action$ => {
  return action$
    .do(action => console.log(action))
    .ignoreElements()
}

