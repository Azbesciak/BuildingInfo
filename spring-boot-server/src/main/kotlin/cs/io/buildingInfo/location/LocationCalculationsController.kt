package cs.io.buildingInfo.location

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class LocationCalculationsController {
  @PostMapping("/cube")
  fun countTotalCube(@RequestBody loc: Location): Double {
    return loc.cube
  }

  @PostMapping("/area")
  fun countTotalArea(@RequestBody loc: Location): Double {
    return loc.area
  }
}
