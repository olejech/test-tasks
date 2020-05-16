import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  position: relative;
  padding: 0 0 0 60px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 50px;
    height: 26px;
    border-radius: 13px;
    background: #fff;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
  &:after {
    content: '';
    position: absolute;
    top: -2px;
    left: 2px;
    width: 22px;
    height: 22px;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: 0.2s;
  }
`

const Label = styled.label`
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
    margin: 10px 0 0 20px;
  }
  input:checked + ${Text}:before {
    background: ${props => props.theme.brandColor};
  }
  input:checked + ${Text}:after {
    left: 26px;
  }
`

export const Switch = ({ text, onChange }) => {
  return (
    <Label>
      <input type="checkbox" onChange={onChange} />
      <Text>{text}</Text>
    </Label>
  )
}
