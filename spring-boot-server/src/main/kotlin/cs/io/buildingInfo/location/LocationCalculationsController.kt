package cs.io.buildingInfo.location

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class LocationCalculationsController {
  @GetMapping("/cube")
  fun countTotalCube(@RequestBody loc: Location): Double {
    return loc.cube
  }

  @GetMapping("/area")
  fun countTotalArea(@RequestBody loc: Location): Double {
    return loc.cube
  }
}
