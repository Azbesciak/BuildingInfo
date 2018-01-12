package cs.io.buildingInfo.location

import com.fasterxml.jackson.core.JsonParser
import com.fasterxml.jackson.databind.*

/**
 * Json Deserializer which parses input to some location, depending on input structure.
 * It can return {#link Room}, {#link Level} or {#link Building}.
 * Also, when data is malformed, can throw Jackson's Parse Error/NullPointer when some fields are missing.
 * When additional parameters are passed, they are not considered.
 */
class LocationDeserializer : JsonDeserializer<Location>() {

  override fun deserialize(p: JsonParser, ctxt: DeserializationContext): Location {
    val node: JsonNode = p.readValueAsTree()
    val location = node.findPath("location")
    return when {
      location.has("levels") -> location.asBuilding()
      location.has("rooms") -> location.asLevel()
      else -> location.asRoom()
    }
  }

  private fun JsonNode.asBuilding(): Building {
    val levelsNode = findPath("levels")
    val levelsNodeList = levelsNode.asList()
    val levels = levelsNodeList.map { it.asLevel() }
    return Building(id = getId(), name = getName(), levels = levels)
  }

  private fun JsonNode.asLevel(): Level {
    val roomsJsonArr = findPath("rooms")
    val roomsList = roomsJsonArr.asList().map { it.asRoom() }
    return Level(id = getId(), name = getName(), rooms = roomsList)
  }

  private fun JsonNode.asRoom() = Room(
    id = getId(),
    name = getName(),
    light = findPath("light").asDouble(),
    heating = findPath("heating").asDouble(),
    area = findPath("area").asDouble(),
    cube = findPath("cube").asDouble()
  )

  private fun JsonNode.getId() = get("id").asLong()
  private fun JsonNode.getName() = get("name").asText()
  private fun JsonNode.asList(): List<JsonNode> = asIterable().toList()
}
