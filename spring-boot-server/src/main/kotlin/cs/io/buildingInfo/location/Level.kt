package cs.io.buildingInfo.location

data class Level(
  override val name: String,
  override val id: Long,
  override val locations: List<Room>
) : LocationAggregator<Room>(locations)
