// create a new type HTMLElementEvent that has a target of type you pass
// type T must be a HTMLElement (e.g. HTMLTextAreaElement extends HTMLElement)
export type UserEvent<T extends HTMLElement> = Event & {
  target: T
  // probably you might want to add the currentTarget as well
  currentTarget: T
}
