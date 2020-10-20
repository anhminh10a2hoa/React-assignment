import React from 'react';
import {Button as ButtonMU} from '@material-ui/core';
import { Link } from 'react-router-dom';

type ButtonProps = {
  id: number
}

const Button: React.FC<ButtonProps> = ({id}) => {
  return(
    <Link to={"/users/" + id}>
      <ButtonMU variant="contained" color="primary" onClick={() => {}}>
        More detail
      </ButtonMU>
    </Link>
  )
}

export default Button;