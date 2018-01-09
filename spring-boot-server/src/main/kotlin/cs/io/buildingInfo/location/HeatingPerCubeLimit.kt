package cs.io.buildingInfo.location

import com.fasterxml.jackson.databind.annotation.JsonDeserialize

data class HeatingPerCubeLimit(
  val limit: Float,
  val loc: Building
)
