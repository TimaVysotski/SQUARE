import { observable, action } from 'mobx';

class PlayStore {
  @observable play = false;

  @action
  setPlay(play: boolean): void {
    this.play = play;
  }

  get getPlay(): boolean {
    return this.play;
  }
}

export default PlayStore;
