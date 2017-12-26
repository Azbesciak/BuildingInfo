package cs.io.buildingInfo.location

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.*
import cs.io.buildingInfo.*


class LocationDeserializer : JsonDeserializer<Location>() {

  override fun deserialize(p: JsonParser, ctxt: DeserializationContext): Location {
    val node: JsonNode = p.readValueAsTree()
    val location = node.findPath("location")
    return when {
      location.has("levels") -> prepareBuilding(location)
      location.has("rooms") -> prepareLevel(location)
      else -> location.asRoom()
    }
  }

  private fun prepareBuilding(node: JsonNode): Building {
    val levelsNode = node.findPath("levels")
    val levelsNodeList = levelsNode.asList()
    val levels = levelsNodeList.map { prepareLevel(it) }
    return Building(id = node.getId(), name = node.getName(), levels = levels)
  }

  private fun prepareLevel(node: JsonNode): Level {
    val roomsJsonArr = node.findPath("rooms")
    val roomsList = roomsJsonArr.asList().map { it.asRoom() }
    return Level(id = node.getId(), name = node.getName(), rooms = roomsList)
  }
}
