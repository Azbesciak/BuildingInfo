package cs.io.buildingInfo.location

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

/**
 * Main controller responsible for giving information about locations.
 * It require JSON input format, in most cases return single value.
 * Methods have polimorfic inputs - however, correct json structure is required,
 * otherwise may be wrongly parsed.
 */
@RestController
class LocationCalculationsController {
  @PostMapping("/cube")
  fun countTotalCube(@RequestBody loc: Location) =  loc.cube

  @PostMapping("/area")
  fun countTotalArea(@RequestBody loc: Location) = loc.area

  @PostMapping("/lightPerArea")
  fun calculateLightPerArea(@RequestBody loc: Location) = loc.light/loc.area

  @PostMapping("/heatPerCube")
  fun calculateHeatingPerVolume(@RequestBody loc: Location) = loc.heating/loc.cube

  @PostMapping("/alert")
  fun  energyAlert(@RequestBody lim: HeatingPerCubeLimit) =
    lim.loc.levels
      .flatMap { it.rooms }
      .filter { calculateHeatingPerVolume(it) > lim.limit }
}
