import { IconButton } from "@mui/material";
import { FC } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import './RateCard.css';
import { Rate } from "../helpers/Rate";

interface Props {
  rate: Rate;
  onDelete: (rate: Rate) => void;
}

export const RateCard: FC<Props> = ({ rate, onDelete }) => {
  console.log(rate.rateNumber)
  return (
    <div className="rate-container" >
      <div className="rate-info">
        <p className="currencies-name">EUR to {rate.targetCurrency}</p>
        <p className="rate">{rate.rateNumber}</p>
      </div>
      <IconButton aria-label="delete" onClick={() => onDelete(rate)}>
        <CancelIcon />
      </IconButton>
    </div>
  )
}