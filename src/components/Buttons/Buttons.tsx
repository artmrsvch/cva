import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../config/colors";

const useStyles = makeStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    color: colors.yellow
  },
  spanTitle: {
    fontSize: '10px',
    fontWeight: 400,
  },
  spanSubtitle: {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: 1.2,
  }
});

export const ButtonDefault: React.FC = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      color="primary"
    >
      <Box component="div" className={classes.box}>
        <Typography variant="subtitle2" component="span" className={classes.spanTitle}>Забронировать</Typography>
        <span className={classes.spanSubtitle}>от 354 ₽</span>
      </Box>
    </Button>
  );
};

export const ButtonYellow: React.FC = () => <Button>Основная кнопка</Button>;
