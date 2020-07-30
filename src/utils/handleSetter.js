export const handleEvent = setter => event => setter(event.target.value);

export const handleValue = setter => value => setter(value);

export const toggleValue = (setter, value) => () => setter(!value);
