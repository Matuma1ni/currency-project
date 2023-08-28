import { Autocomplete, Button, TextField } from "@mui/material";
import { currencies } from "../clients/exchanger_api";
import './RatesHeader.css'

export function RatesHeader() {
    return (
        <div className="rates-header">
            <Autocomplete
              disablePortal
              id="currency-rate-from"
              options={currencies}
              sx={{ width: "30%" }}
              renderInput={(params) => <TextField {...params} label="FROM" />}
            />
            <Autocomplete
              disablePortal
              id="currency-rate-to"
              options={currencies}
              sx={{ width: "30%" }}
              renderInput={(params) => <TextField {...params} label="TO" />}
            />
            <Button variant="contained">Add</Button>
          </div>
    )
}