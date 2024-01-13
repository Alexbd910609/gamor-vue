import {ref, Ref} from "vue";
import {getPlayersEndpoint} from "@/constants/endpoints";
import {Player, PlayerPlatform} from "@/interfaces/player.interface";

export class PlayersService {
  private _players: Ref<Player[]> = ref([]);

  public getPlayers(): Ref<Player[]> {
    return this._players;
  }

  public async getAllPlayers(platform: PlayerPlatform, game: string): Promise<void> {
    try {
      const response: Response = await fetch(getPlayersEndpoint + '?platform=' + platform + '&game=' + game);
      const json = await response.json();
      this._players.value = await json;
    } catch (error) {
      console.log(error);
    }
  }
}