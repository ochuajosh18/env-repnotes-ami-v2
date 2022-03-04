import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DateIcon from "@material-ui/icons/Event";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: { display: "flex", marginTop: 0, marginBottom: 0 },
    root: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 12,
      "& label.Mui-focused": {
        color: "#d2d6de",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#d2d6de",
        },
        "&:hover fieldset": {
          borderColor: "#272B75",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#272B75",
        },
      },
      "& .MuiInputBase-input": {
        fontSize: 12,
      },
    },
  })
);

interface IProps {
  label?: string;
  disabled?: boolean;
  value?: string;
  onChange: (dateStr: string) => void;
}

const RepnotesDatePicker = (props: IProps) => {
  const { label, disabled, value, onChange } = props;
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Box className='repnotes-input-container' position='relative'>
        <Grid container>
          <Grid
            item
            className='repnotes-input-label-container'
            xs={4}
            style={{
              textAlign: "right",
              paddingRight: "15px",
              paddingTop: "15px",
            }}
          >
            <Typography
              style={{
                padding: "3px 0",
                fontSize: 12,
                fontWeight: 700,
                color: "#272B75",
              }}
            >
              {label}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <DatePicker
              margin='normal'
              id='date-picker-dialog'
              format='MMM/dd/yyyy'
              value={value ? value : null}
              inputVariant='outlined'
              onChange={(date) => onChange(date as unknown as string)}
              className={classes.formControl}
              placeholder={label}
              disabled={disabled}
              InputProps={{
                className: classes.root,
                fullWidth: true,
                margin: "dense",
                endAdornment: (
                  <IconButton style={{ padding: "0" }}>
                    <DateIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </MuiPickersUtilsProvider>
  );
};

export default RepnotesDatePicker;
