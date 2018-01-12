package cs.io.buildingInfo.location

/**
 * Represents single level of some building structure.
 * Contract is that it is a container for lower-spaced objects, in this case - {#link Room}
 * However, it can be also some other location with inherits after {#link Room}.
 */
data class Level(
  override val name: String,
  override val id: Long,
  val rooms: List<Room>
) : LocationAggregator<Room>(rooms)
