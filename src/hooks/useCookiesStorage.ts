import { Dispatch, SetStateAction, useCallback, useState } from 'react'
import Cookies from 'js-cookie'

type SetValue<T> = Dispatch<SetStateAction<T>>

export const useCookiesStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = Cookies.get(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  const setValue = useCallback<SetValue<T>>(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value
        setStoredValue(valueToStore)
        Cookies.set(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.log(error)
      }
    },
    [storedValue, key]
  )
  return [storedValue, setValue]
}
