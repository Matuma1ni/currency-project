import { Autocomplete, Button, TextField } from "@mui/material";
import { BASE_CURRENCIES, currencies } from "../clients/exchangerApi";
import './RatesHeader.css'
import { FC, useState } from "react";

interface Props {
  onAddItem: (currency: string) => void;
}

export const RatesHeader: FC<Props> = ({onAddItem}) => {
    const [getTargetCurrency, setTargetCurrency] = useState('USD');
    const handleAddRate = () => {
      if (getTargetCurrency) {
        onAddItem(getTargetCurrency)
      }
    }

    return (
        <div className="rates-header">
            <Autocomplete
              disablePortal
              id="currency-rate-from"
              options={BASE_CURRENCIES}
              sx={{ width: "30%" }}
              renderInput={(params) => <TextField {...params} label="FROM" />}
            />
            <Autocomplete
              disablePortal
              id="currency-rate-to"
              options={currencies}
              sx={{ width: "30%" }}
              value={getTargetCurrency}
              renderInput={(params) => <TextField {...params} label="TO" />}
            />
            <Button variant="contained" sx={{ height: 50 }} onClick={handleAddRate}>Add</Button>
          </div>
    )
}