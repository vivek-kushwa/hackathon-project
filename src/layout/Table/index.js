import {
   Table as MuiTable,
   Paper,
   Skeleton,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
   Typography,
} from "@mui/material";

export const Table = ({ Headers = [], isLoading = false, children, listLength }) => {
   return (
      <Paper
         elevation={0}
         sx={{
            border: "1px solid",
            borderColor: "neutrals.300",
         }}>
         <MuiTable>
            <TableHead>
               <TableRow
                  sx={{
                     bgcolor: "neutrals.light",
                  }}>
                  {Headers.length &&
                     Headers.map(heading => (
                        <TableCell
                           key={heading}
                           component="th"
                           sx={{
                              p: 1.8,
                              color: "primary.mediumLight",

                              fontFamily: "Proxima_Nova-SemiBold",
                           }}>
                           {heading}
                        </TableCell>
                     ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {!isLoading && listLength === 0 && (
                  <TableRow
                     sx={{
                        height: "200px",
                     }}>
                     <TableCell
                        component="td"
                        scope="row"
                        padding="none"
                        sx={{
                           p: 1,
                        }}
                        colSpan={Headers.length}>
                        <Typography
                           variant="subtitle2"
                           width={"100%"}
                           height="100%"
                           sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                           }}
                           fontSize={20}>
                           No Data Found!
                        </Typography>
                     </TableCell>
                  </TableRow>
               )}
               {!isLoading ? (
                  <>{children}</>
               ) : (
                  <>
                     <TableRow>
                        <TableCell
                           component="td"
                           scope="row"
                           padding="none"
                           sx={{ p: 1 }}
                           colSpan={Headers.length}>
                           <Skeleton
                              width={"100%"}
                              height="100%"
                              sx={{ p: 3, bgcolor: "neutrals.light" }}
                              variant="rectangular"
                           />
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell
                           component="td"
                           scope="row"
                           padding="none"
                           sx={{ p: 1 }}
                           colSpan={Headers.length}>
                           <Skeleton
                              width={"100%"}
                              height="100%"
                              sx={{ p: 3, bgcolor: "neutrals.light" }}
                              variant="rectangular"
                           />
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell
                           component="td"
                           scope="row"
                           padding="none"
                           sx={{ p: 1 }}
                           colSpan={Headers.length}>
                           <Skeleton
                              width={"100%"}
                              height="100%"
                              sx={{ p: 3, bgcolor: "neutrals.light" }}
                              variant="rectangular"
                           />
                        </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell
                           component="td"
                           scope="row"
                           padding="none"
                           sx={{ p: 1 }}
                           colSpan={Headers.length}>
                           <Skeleton
                              width={"100%"}
                              height="100%"
                              sx={{ p: 3, bgcolor: "neutrals.light" }}
                              variant="rectangular"
                           />
                        </TableCell>
                     </TableRow>
                  </>
               )}
            </TableBody>
         </MuiTable>
      </Paper>
   );
};
