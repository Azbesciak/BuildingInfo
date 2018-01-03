package cs.io.buildingInfo.location

import com.fasterxml.jackson.databind.annotation.JsonDeserialize

/**
 * Basic interface to represent any locations.
 * It assumes that every location has a cube (given in meters^3), area (meters^2), heating (KWh) and light.
 * Also, each location has it's own id. However, its interpretation is dependent on the consumer.
 */
@JsonDeserialize(using = LocationDeserializer::class)
interface Location {
  val cube: Double
  val area: Double
  val heating: Double
  val light: Double
  val name: String
  val id: Long
}
