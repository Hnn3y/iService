import { useState, useEffect } from 'react';
import './App.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import { Button } from '@shadcn/ui';
// import { Button } from "@shadcn/ui"
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <h1>Emma + Henny</h1>
      <div className="card">
      <Button variant="contained" color="primary">
        AM MUI BTN
      </Button>
        <p>
        Enjoy your coffee fontawesome icon! <FontAwesomeIcon icon={faCoffee} />
        </p>
      </div>
      <p className="read-the-docs border border-red-300 text-red-800">
        Fronteend lover checked some stuffs out.
      </p>
    </>
  )
}

export default App
