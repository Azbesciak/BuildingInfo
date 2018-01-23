package cs.io.buildingInfo

import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType

import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.web.context.WebApplicationContext

import org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.*
import org.springframework.test.web.servlet.setup.MockMvcBuilders.*

@ExtendWith(SpringExtension::class)
@SpringBootTest
class LocationCalculationTests(private val webApplicationContext: WebApplicationContext) {
  private lateinit var mockMvc: MockMvc

  @BeforeEach
  fun setUp() {
    mockMvc = webAppContextSetup(webApplicationContext).build()
  }


  @Test
  fun `test cube calculations for building`() {
    val perform = mockMvc.perform(post("/cube").contentType(MediaType.APPLICATION_JSON_UTF8)
      .content("""
        {
          "id": 7,
          "name": "some building",
          "levels": [
            {
              "id": 14,
              "name": "1st",
              "rooms": [
                {
                  "cube": 17,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 2,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 14,
                  "name": "some name"
                }
              ]
            },
            {
              "id": 69,
              "name": "2st",
              "rooms": [
                {
                  "cube": 89,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 21,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 141,
                  "name": "some name"
                }
              ]
            }
          ]
        }
        """)).andDo(MockMvcResultHandlers.print())
    perform
      .andExpect(status().isOk)
      .andExpect(content().json("138.0"))
  }

  @Test
  fun `test area calculations for building`() {
    val perform = mockMvc.perform(post("/area").contentType(MediaType.APPLICATION_JSON_UTF8)
      .content("""
        {
          "id": 7,
          "name": "some building",
          "levels": [
            {
              "id": 14,
              "name": "1st",
              "rooms": [
                {
                  "cube": 17,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 2,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 14,
                  "name": "some name"
                }
              ]
            },
            {
              "id": 69,
              "name": "2st",
              "rooms": [
                {
                  "cube": 89,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 21,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 141,
                  "name": "some name"
                }
              ]
            }
          ]
        }
        """)).andDo(MockMvcResultHandlers.print())
    perform
      .andExpect(status().isOk)
      .andExpect(content().json("24.0"))
  }



  @Test
  fun `test lightPerArea calculations for building`() {
    val perform = mockMvc.perform(post("/lightPerArea").contentType(MediaType.APPLICATION_JSON_UTF8)
      .content("""
        {
          "id": 7,
          "name": "some building",
          "levels": [
            {
              "id": 14,
              "name": "1st",
              "rooms": [
                {
                  "cube": 17,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 2,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 14,
                  "name": "some name"
                }
              ]
            },
            {
              "id": 69,
              "name": "2st",
              "rooms": [
                {
                  "cube": 89,
                  "area": 8,
                  "heating": 17,
                  "light": 18,
                  "id": 21,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 25,
                  "id": 141,
                  "name": "some name"
                }
              ]
            }
          ]
        }
        """)).andDo(MockMvcResultHandlers.print())
    perform
      .andExpect(status().isOk)
      .andExpect(content().json("3.5"))
  }

  @Test
  fun `test heatPerCube calculations for building`() {
    val perform = mockMvc.perform(post("/heatPerCube").contentType(MediaType.APPLICATION_JSON_UTF8)
      .content("""
        {
          "id": 7,
          "name": "some building",
          "levels": [
            {
              "id": 14,
              "name": "1st",
              "rooms": [
                {
                  "cube": 17,
                  "area": 8,
                  "heating": 13,
                  "light": 18,
                  "id": 2,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 23,
                  "id": 14,
                  "name": "some name"
                }
              ]
            },
            {
              "id": 69,
              "name": "2st",
              "rooms": [
                {
                  "cube": 81,
                  "area": 8,
                  "heating": 15,
                  "light": 18,
                  "id": 21,
                  "name": "some name"
                },
                {
                  "cube": 16,
                  "area": 4,
                  "heating": 12,
                  "light": 25,
                  "id": 141,
                  "name": "some name"
                }
              ]
            }
          ]
        }
        """)).andDo(MockMvcResultHandlers.print())
    perform
      .andExpect(status().isOk)
      .andExpect(content().json("0.4"))
  }
}
