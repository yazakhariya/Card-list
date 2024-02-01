import { styled } from 'styled-components'

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

export const Button = styled.button`
  outline: none;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-weight: 600;
  font-size: 20px;
  padding: 10px;
  background: #EE88A3;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow:
    inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  &&:hover {
    box-shadow: 2px 2px 5px #555;
  }
  &&:active {
    box-shadow: 2px 2px 5px #000;
  }
`
