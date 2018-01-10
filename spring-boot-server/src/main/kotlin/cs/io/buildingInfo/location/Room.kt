package cs.io.buildingInfo.location

/**
 * Basic implementation of {#link Location}.
 * Requires each value to be positive, otherwise throws {#link IllegalStateException}.
 */
data class Room(
  override val cube: Double,
  override val area: Double,
  override val heating: Double,
  override val light: Double,
  override val name: String,
  override val id: Long
) : Location {
  init {
      require( cube > 0)
      require( area > 0)
      require( heating > 0)
      require( light > 0)
  }
}
