import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import NotesActLogTable from "./NotesActLogTable";
import SalesQuotesActLogTable from "./SalesQuotesActLogTable";
import MeetingsActLogTable from "./MeetingsActLogTable";
import CustomerInfoTable from "./CustomerInfoTable";
import { selectDashboardState } from "../../../../store/dashboard/actions";

const ActivityLogTables = () => {
  const { filterSelectedSalesperson, filterSelectedCustomer } = useSelector(selectDashboardState);

  const customerInfoShown = filterSelectedSalesperson || filterSelectedCustomer;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={customerInfoShown ? 8 : 12}>
        <SalesQuotesActLogTable />
        <MeetingsActLogTable />
        <NotesActLogTable />
      </Grid>
      {customerInfoShown && (
        <Grid item xs={12} sm={4} style={{ marginTop: "64px" }}>
          <CustomerInfoTable />
        </Grid>
      )}
    </Grid>
  );
};

export default ActivityLogTables;
