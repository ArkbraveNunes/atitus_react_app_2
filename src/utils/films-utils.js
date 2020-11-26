export default class StarWarsUtils {
  static orderFilms({filmsList}) {
        return filmsList.sort((itemA, itemB) => {
            return itemA.episode_id - itemB.episode_id;
        });
  }
};