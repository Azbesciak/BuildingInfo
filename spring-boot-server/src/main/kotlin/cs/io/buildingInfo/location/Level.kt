package cs.io.buildingInfo.location

data class Level(
  override val name: String,
  override val id: Long,
  val rooms: List<Room>
) : LocationAggregator<Room>(rooms)
