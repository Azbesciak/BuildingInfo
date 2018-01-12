package cs.io.buildingInfo.location

/**
 * Upper level which contains some other locations.
 * There is no requirement of location type.
 * All calculations are lazy - calculated only once
 * for all aggregated location when given is called.
 */
abstract class LocationAggregator<out T : Location>(
  private val locations: List<T>
) : Location {
  override val cube: Double by lazy {
    aggregate { it.cube }
  }
  override val area: Double by lazy {
    aggregate { it.area }
  }
  override val heating: Double by lazy {
    aggregate { it.heating }
  }
  override val light: Double by lazy {
    aggregate { it.light }
  }

  private fun aggregate(f: (Location) -> Double) = locations.sumByDouble(f)
}
