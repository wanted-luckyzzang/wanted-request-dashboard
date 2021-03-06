import styled from 'styled-components';

export const MenuWrap = styled.div<{ openMenu: boolean }>`
  @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 36%;
    left: 20px;
    ${({ theme }) => theme.flex.column};
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    span {
      width: 24px;
      height: 2px;
      margin-bottom: 3px;
      background: ${({ theme }) => theme.color.white};
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;
      display: ${(props) => (props.openMenu ? 'none' : 'block')};

      @media screen and (max-width: ${({ theme }) => theme.media.tablet}) {
        width: 18px;
      }
    }
  }
`;
