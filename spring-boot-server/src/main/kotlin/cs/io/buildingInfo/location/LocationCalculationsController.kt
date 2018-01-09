package cs.io.buildingInfo.location

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
  @PostMapping("/LightPerArea")
  fun calculateLightPerArea(@RequestBody loc: Location): Double{
    return loc.light/loc.area
  }

  @PostMapping("/HeatperCube")
  fun calculateHeatingPerVolume(@RequestBody loc: Location): Double{
    return loc.heating/loc.cube
  }

  @PostMapping("/alert")
  fun  energyAlert(@RequestBody lim: HeatingPerCubeLimit): MutableList<Room>{
    val aboveLimit: MutableList<Room> = mutableListOf<Room>()
    for (i in 0..(lim.loc.levels.size-1)) {
      for (j in 0..(lim.loc.levels[i].rooms.size - 1)) {
        if (calculateHeatingPerVolume(lim.loc.levels[i].rooms[j]) > lim.limit)
          aboveLimit.add(lim.loc.levels[i].rooms[j])
      }
    }
    return aboveLimit
  }
}
