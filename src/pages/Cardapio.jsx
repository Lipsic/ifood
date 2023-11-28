import {useState} from 'react';
import { Popover, Button, Typography } from '@mui/material';
import { CardapioStyles } from '../styles/Cardapio';
import {useAtom} from 'jotai';
import { writeOnlyAtom } from '../store/cart';
import { Snackbar, Alert } from '@mui/material';

function Cardapio({menus}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const[openSnackbar, setOpenSnackbar]=useState(false)
  const [_, addToCart] = useAtom(writeOnlyAtom);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function handleClick(e){
    setAnchorEl(anchorEl ? null : e.currentTarget);
  }
  
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  const handleAddToCart = () => {
    addToCart(anchorEl.innerText)
    setOpenSnackbar(true)
    setAnchorEl(null);
  }
  
  return (
    <>
   <CardapioStyles id="menus">
        <thead  style={{marginBottom: '2rem'}}>
      <tr>
        <th  aria-describedby={'spring-popper'}>Foods</th>
        <th>Drinks</th>
      </tr>
        </thead>
        <tbody>
        {menus !== undefined && menus.foods.map((food, i)=>(
          <tr key={food.name}>
          <td onClick={handleClick}>{food.name}</td>
          <td style={{paddingLeft: '4rem'}} onClick={handleClick}>{menus?.drinks[i]?.name|| ''}</td>
        </tr>
        ))}
        </tbody>
      </CardapioStyles>
    <Popover
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
>
  <Typography sx={{ p: 2 }}>Add to cart:</Typography>
  <Typography sx={{ p: 2 }}>{anchorEl?.innerText}</Typography>
  <div style={{padding: '20px', display: 'flex', gap: '10px'}}>
    <Button variant='contained' onClick={handleClose}color='error'>Cancel</Button>
    <Button variant='outlined' type='outlined' color='success' onClick={handleAddToCart}>Add</Button>
  </div>
  </Popover> 
    <Snackbar
    open={openSnackbar}
    autoHideDuration={6000}
    onClose={handleCloseSnackbar}
  >
    <Alert severity="success" variant="filled">Item added to cart!</Alert>
  </Snackbar>
    </>
  )
}

export default Cardapio