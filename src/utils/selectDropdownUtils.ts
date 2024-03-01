export function checkIsSelectedOption(
  toCheck: Record<string, string | number>,
  selectedOptions:
    | Record<string, string | number>
    | Record<string, string | number>[],
) {
  if (Array.isArray(selectedOptions)) {
    for (let i = 0; i < selectedOptions.length; i++) {
      if (selectedOptions[i].label === toCheck.label) {
        return true
      }
    }
  } else return toCheck.label === selectedOptions.label

  return false
}

export function getFilteredOptions(
  tofilter: Record<string, string | number>,
  currentOptions:
    | Record<string, string | number>
    | Record<string, string | number>[],
  multiple?: boolean,
) {
  if (Array.isArray(currentOptions)) {
    return checkIsSelectedOption(tofilter, currentOptions)
      ? currentOptions.filter((item) => item.label !== tofilter.label)
      : [...currentOptions, tofilter]
  } else return multiple ? [tofilter] : tofilter
}

export function valuesToOptions(
  options: Record<string, string | number>[],
  values: number | number[],
) {
  if (Array.isArray(values)) {
    return options.filter((item) => values.includes(item.value as number))
  } else return options.filter((item) => item.value === values)[0]
}

export function checkIsSelectedValue(
  toCheck: number,
  selectedValues: number | number[],
) {
  if (Array.isArray(selectedValues)) {
    return selectedValues.includes(toCheck)
  } else return selectedValues === toCheck
}

export function getFilteredValues(
  tofilter: number,
  currentOptions: number | number[],
  multiple?: boolean,
  contentRef?: React.RefObject<HTMLDivElement>,
  noContentRef?: React.RefObject<HTMLDivElement>,
) {
  if (!multiple) {
    if (contentRef) {
      contentRef.current?.click()
    }
    if (noContentRef) {
      noContentRef.current?.click()
    }
  }

  if (Array.isArray(currentOptions)) {
    return checkIsSelectedValue(tofilter, currentOptions)
      ? currentOptions.filter((item) => item !== tofilter)
      : [...currentOptions, tofilter]
  } else return multiple ? [tofilter] : tofilter
}
