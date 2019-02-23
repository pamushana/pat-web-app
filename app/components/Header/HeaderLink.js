import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  background: ${props =>
    props.traveller
      ? '#f2711c '
      : props.discover
        ? '#EE1D23'
        : props.support
          ? '#1678C2'
          : null};
  text-align: center;
  padding: 0.5em;
  border-radius: 2em;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 1rem;
  color: #fff;

  &:active {
    background: ${props =>
    props.traveller
        ? '#f26202'
        : props.discover
          ? '#480D0E'
          : props.support
            ? '#113f60'
            : null};
    color: #fff;
  }

  &:hover {
    background: ${props =>
      props.traveller
      ? '#f26202'
      : props.discover
        ? '#480D0E'
        : props.support
          ? '#113f60'
          : null};
    color: #fff;
  }
`;
