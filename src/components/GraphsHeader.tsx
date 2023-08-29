import { Autocomplete, Button, TextField } from "@mui/material";
import { BASE_CURRENCIES, currencies } from "../clients/exchangerApi";
import './GraphsHeader.css'

export function GraphsHeader() {
    return (
        <div className="graph-header">
            <div className="graphs-header">
                <div>
                    <div className="graphs-dates">
                        <TextField
                            id="graph-from-date"
                            label="FROM DATE"
                            variant="outlined"
                            sx={{ width: "40%" }}
                        />
                        <TextField
                            id="graph-to-date"
                            label="TO DATE"
                            variant="outlined"
                            sx={{ width: "40%" }}
                        />
                    </div>
                    <div className="graphs-currencies">
                        <Autocomplete
                            disablePortal
                            id="currency-rate-from"
                            options={BASE_CURRENCIES}
                            sx={{ width: "40%" }}
                            renderInput={(params) => <TextField {...params} label="FROM" />}
                        />
                        <Autocomplete
                            disablePortal
                            id="currency-rate-to"
                            options={currencies}
                            sx={{ width: "40%" }}
                            renderInput={(params) => <TextField {...params} label="TO" />}
                        />
                    </div>
                </div>
                <Button variant="contained" sx={{ height: 50 }}>Add</Button>
            </div>
        </div>
    )
}