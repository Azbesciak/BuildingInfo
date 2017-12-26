package cs.io.buildingInfo.location

data class Building(
  override val name: String,
  override val id: Long,
  val levels: List<Level>
) : LocationAggregator<Level>(levels)
