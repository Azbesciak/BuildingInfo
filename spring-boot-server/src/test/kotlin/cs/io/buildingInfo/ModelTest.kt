package cs.io.buildingInfo

import cs.io.buildingInfo.location.Building
import cs.io.buildingInfo.location.Level
import cs.io.buildingInfo.location.Room
import io.mockk.every
import io.mockk.mockk
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.function.Executable


class ModelTest {
  lateinit var level1: Level
  lateinit var level2: Level
  lateinit var building: Building
  private val delta =  0.0001

  @BeforeEach
  fun setUp() {
    level1 = Level(name = "1st", id = 1, rooms = listOf(
      Room(cube = 2.0, area = 7.0, heating = 10.0, light = 8.0, id = 999, name = "Biuro"),
      Room(cube = 7.0, area = 3.0, heating = 15.0, light = 1.0, id = 12, name = "Living room"),
      Room(cube = 8.0, area = 5.0, heating = 3.0, light = 17.0, id = 17, name = "Sleeping room")
    ))
    level2 = Level(name = "2st", id = 1, rooms = listOf(
      Room(cube = 3.0, area = 14.47, heating = 17.0, light = 8.0, id = 17, name = "Bathroom"),
      Room(cube = 17.33, area = 85.0, heating = 0.5, light = 1.8, id = 162, name = "Shed"),
      Room(cube = 56.0, area = 14.14, heating = 3.17, light = 17.1, id = 177, name = "Loft")
    ))
    building = Building(name = "Cottage", id = 6, levels = listOf(level1, level2))
  }

  @Test
  fun `test counting all for level`() {
    assertAll(
      "should sum all values in given dimension at the first floor",
      Executable { assertEquals(17.0, level1.cube, delta) },
      Executable { assertEquals(15.0, level1.area, delta) },
      Executable { assertEquals(26.0, level1.light, delta) },
      Executable { assertEquals(28.0, level1.heating, delta) }
    )

    assertAll(
      "should sum all values in given dimension at the second floor (decimal values)",
      Executable { assertEquals(76.33, level2.cube, delta) },
      Executable { assertEquals(113.61, level2.area, delta) },
      Executable { assertEquals(26.9, level2.light, delta) },
      Executable { assertEquals(20.67, level2.heating, delta) }
    )
  }

  @Test
  fun `test constant results`() {
    assertAll(
      "should sum all values in given dimension",
      Executable { assertEquals(17.0, level1.cube, delta) },
      Executable { assertEquals(17.0, level1.cube, delta) },
      Executable { assertEquals(17.0, level1.cube, delta) },
      Executable { assertEquals(17.0, level1.cube, delta) },
      Executable { assertEquals(17.0, level1.cube, delta) }
    )
  }

  @Test
  fun `test building values`() {
    assertAll(
      "should be equal to sum of two levels",
      Executable { assertEquals(level1.cube + level2.cube, building.cube, delta) },
      Executable { assertEquals(level1.area + level2.area, building.area, delta) },
      Executable { assertEquals(level1.light + level2.light, building.light, delta) },
      Executable { assertEquals(level1.heating + level2.heating, building.heating, delta) }
    )
  }

  @Test
  fun `test counting cube`() {
    val cubedRooms = mockedRoomsWithCube(listOf(1.0, 2.0, 3.0, 4.0))
    val level1 = Level("lama", 1234, cubedRooms)
    assertEquals(10.0, level1.cube, delta)

    val biggerRooms = mockedRoomsWithCube(listOf(65.0, 17.75, 14.1))
    val level2 = Level("koza", 4321, biggerRooms)
    assertEquals(96.85, level2.cube, delta)

    val building = Building("big and small", 666, listOf(level1, level2))
    assertEquals(106.85, building.cube, delta)
  }

  private fun mockedRoomsWithCube(cubes: List<Double>) =
    cubes.map { mockk<Room>().apply { every {cube} returns it } }

}
