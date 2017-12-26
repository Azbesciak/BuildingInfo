package cs.io.buildingInfo.location

data class Room(
  override val cube: Double,
  override val area: Double,
  override val heating: Double,
  override val light: Double,
  override val name: String,
  override val id: Long
) : Location
