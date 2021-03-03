import styled from 'styled-components'
import {get} from '../constants'
import sx, {SxProp} from '../sx'
import {ComponentProps} from '../utils/types'
import ButtonBase, {ButtonBaseProps, ButtonSystemProps, buttonSystemProps} from './ButtonBase'

const ButtonOutline = styled(ButtonBase)<ButtonBaseProps & ButtonSystemProps & SxProp>`
  color: ${get('buttons.outline.color.default')};
  border: 1px solid ${get('buttons.outline.border.default')};
  background-color: ${get('buttons.outline.bg.default')};
  box-shadow: ${get('buttons.outline.shadow.default')};

  &:hover {
    color: ${get('buttons.outline.color.hover')};
    background-color: ${get('buttons.outline.bg.hover')};
    border-color: ${get('buttons.outline.border.hover')};
    box-shadow: ${get('buttons.outline.shadow.hover')};
  }
  // focus must come before :active so that the active box shadow overrides
  &:focus {
    border-color: transparent;
    box-shadow: ${get('buttons.outline.shadow.focus')};
  }

  &:active {
    color: ${get('buttons.outline.color.active')};
    background-color: ${get('buttons.outline.bg.active')};
    border-color: ${get('buttons.outline.border.active')};
    box-shadow: ${get('buttons.outline.shadow.active')};
  }

  &:disabled {
    color: ${get('buttons.outline.color.disabled')};
    border-color: ${get('buttons.outline.border.default')};
    background-color: ${get('buttons.outline.bg.disabled')};
  }

  ${buttonSystemProps};
  ${sx};
`

export type ButtonOutlineProps = ComponentProps<typeof ButtonOutline>
export default ButtonOutline
