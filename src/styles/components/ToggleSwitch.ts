import styled from 'styled-components'

export const Checkbox = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  visibility: hidden;
`

interface LabelProps {
  isOn: boolean
}

export const Label = styled.label<LabelProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 32px;
  cursor: pointer;
  border-radius: 65px;
  width: 65px;
  height: 32px;
  background: ${props => {
    const { isOn } = props
    const { primary, altText } = props.theme.colors

    return isOn ? primary : altText
  }};
  transition: background-color 0.2s;
`

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 28px;
  width: 28px;
  height: 28px;
  transition: 0.2s;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${Label}:active & {
    width: 33px;
  }

  ${Checkbox}:checked + ${Label} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`
