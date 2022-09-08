// A Director Class
import House from './house'
import HouseBuilder from './house-builder'

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('House Boat')
            .setNumberWindows(8)
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .getResult()
    }
}
