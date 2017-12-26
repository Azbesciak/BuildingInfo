package cs.io.buildingInfo

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.JsonNode
import com.fasterxml.jackson.databind.ObjectMapper
import cs.io.buildingInfo.location.Room
import java.util.*


inline infix fun <T> Optional<T>.or(supplier: () -> Optional<T>) = if (isPresent) this else supplier()


fun JsonNode.asList(): List<JsonNode> = this.asIterable().toList()
fun JsonNode.asRoom() = Room(
  id = getId(),
  name = getName(),
  light = findPath("light").asDouble(),
  heating = findPath("heating").asDouble(),
  area = findPath("area").asDouble(),
  cube = findPath("cube").asDouble()
)

fun JsonNode.getId() = this.get("id").asLong()
fun JsonNode.getName() = this.get("name").asText()
