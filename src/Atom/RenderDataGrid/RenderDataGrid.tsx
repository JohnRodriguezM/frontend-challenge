/* eslint-disable @typescript-eslint/naming-convention */
import { type FC } from "react";

import { Grid, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { v4 as uuidv4 } from "uuid";
import { dataGridTypesWithAdditionalElement } from "./types/renderDataGrid.types";
import { Title } from "../Titile/Title";
/**
 * Renders a data grid and provides options to download the data as an XLS or PDF file.
 * @param rows - The data to be rendered in the data grid.
 * @param columns - The columns to be displayed in the data grid.
 * @param title - The title of the data grid.
 */
export const RenderDataGrid: FC<dataGridTypesWithAdditionalElement> = ({
  rows,
  columns,
  title,
  aditionalElement,
}: dataGridTypesWithAdditionalElement): JSX.Element => {
  return (
    <Grid
      container
      sx={{
        position: "relative",
        background: "#FAFAFA",
        borderRadius: "15px",
        p: "25px",
        mb: "25px",
        boxShadow: "0px 3px 6px #042F4A26",
      }}
    >
      <Grid item xs={12}>
        <Title title={title} />
        <Box sx={{ mt: "20px", mb: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%" }}>
                <DataGrid
                  density="compact"
                  autoHeight
                  rows={rows}
                  columns={columns as never}
                  rowHeight={75}
                  // experimentalFeatures={{ newEditingApi: true }}
                  getRowId={() => uuidv4()}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        {aditionalElement}
      </Grid>
    </Grid>
  );
};
