import {Game} from "@/interfaces/game.interface";
import {ref, Ref} from "vue";
import {getGamesEndpoint} from "@/constants/endpoints";

export class GamesService {
  private _games: Ref<Game[]> = ref([]);

  public getGames(): Ref<Game[]> {
    return this._games;
  }

  public async getAllGames(): Promise<void> {
    try {
      const response: Response = await fetch(getGamesEndpoint);
      const json = await response.json();
      this._games.value = await json;
    } catch (error) {
      console.log(error);
    }
  }
}
