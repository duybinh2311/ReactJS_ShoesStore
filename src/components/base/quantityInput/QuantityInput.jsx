import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ActionIcon, Group, Text } from '@mantine/core'
import React, { useState } from 'react'
import styleQuantityInput from './style'
import PropTypes from 'prop-types'

export default function QuantityInput({ min, max, className }) {
  /* Local State */
  const [value, setValue] = useState(min)
  /* Style */
  const { classes, cx } = styleQuantityInput()
  return (
    <Group className={cx(classes.wrapper, className)} position="apart">
      <ActionIcon
        className={classes.control}
        onClick={() => setValue((value) => value - 1)}
        disabled={value === min}
      >
        <FontAwesomeIcon icon={faMinus} />
      </ActionIcon>
      <Text ta="center" miw={50}>
        {value}
      </Text>
      <ActionIcon
        className={classes.control}
        onClick={() => setValue((value) => value + 1)}
        disabled={value === max}
      >
        <FontAwesomeIcon icon={faPlus} />
      </ActionIcon>
    </Group>
  )
}

QuantityInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
}
