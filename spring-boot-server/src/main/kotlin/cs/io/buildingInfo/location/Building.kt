package cs.io.buildingInfo.location

data class Building(
  override val name: String,
  override val id: Long,
  override val locations: List<Level>
) : LocationAggregator<Level>(locations)
