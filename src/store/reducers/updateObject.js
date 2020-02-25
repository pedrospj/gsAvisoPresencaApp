export default function updateObject(oldState, newState) {
  return {
    ...oldState,
    ...newState,
  };
}
