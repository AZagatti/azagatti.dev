import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = localStorage.get(key)
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
        if (typeof window !== 'undefined') {
          localStorage.set(key, JSON.stringify(valueToStore))
        }
      } catch (error) {
        console.log(error)
      }
    },
    [storedValue, key]
  )
  return [storedValue, setValue]
}
