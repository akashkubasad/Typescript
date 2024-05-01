function calculate<T>(arg1: T) : T {
  return arg1 * arg1;
}

<T> ===> explicitly accepsts the type of datatype of the argument
"T" is used to capture the data sent by the user
calculate<number>(3)
