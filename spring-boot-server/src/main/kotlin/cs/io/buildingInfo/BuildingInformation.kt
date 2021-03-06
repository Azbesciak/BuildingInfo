package cs.io.buildingInfo

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter


@SpringBootApplication
class BuildingInformation {

  @Bean
  fun corsFilter(): CorsFilter {
    val source = UrlBasedCorsConfigurationSource()
    val config = CorsConfiguration()
    config.allowCredentials = true
    config.addAllowedOrigin("*")
    config.addAllowedHeader("*")
    config.addAllowedMethod("OPTIONS")
    config.addAllowedMethod("GET")
    config.addAllowedMethod("POST")
    config.addAllowedMethod("PUT")
    config.addAllowedMethod("DELETE")
    source.registerCorsConfiguration("/**", config)
    return CorsFilter(source)
  }
}

fun main(args: Array<String>) {
  SpringApplication.run(BuildingInformation::class.java, *args)
}
