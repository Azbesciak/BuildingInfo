package cs.io.buildingInfo

import java.util.*


inline infix fun <T> Optional<T>.or(supplier: () -> Optional<T>) = if (isPresent) this else supplier()

inline infix fun <S, T> S.mapTo(f: S.() -> T): T = f()
inline infix fun <S, T> S.map(f: S.() -> T): T? = if (this != null) f(this) else null
inline infix fun <S> S.orElse(f: S.() -> S): S = this ?: f()


