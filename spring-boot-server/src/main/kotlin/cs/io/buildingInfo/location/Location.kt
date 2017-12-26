package cs.io.buildingInfo.location

import com.fasterxml.jackson.databind.annotation.JsonDeserialize

@JsonDeserialize(using = LocationDeserializer::class)
interface Location {
  val cube: Double
  val area: Double
  val heating: Double
  val light: Double
  val name: String
  val id: Long
}
