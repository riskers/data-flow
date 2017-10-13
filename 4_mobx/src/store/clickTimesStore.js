import { observable, action } from 'mobx'

class clickTimesStore {
  @observable times = 0;
  @action inc = () => {
    this.times++
  }
  @action dec = () => {
    this.times--
  }
}

const clickTimes = new clickTimesStore

export default clickTimes