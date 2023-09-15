import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import { Center } from "components/Flex";
import { SimpleInput } from "components/Form";

export const Pagination = ({ totalPage = 10, page = 1, onChangePage = _ => {} }) => {
   const handlePrevButtonClick = event => {
      onChangePage(event, page - 1);
   };

   const handleNextButtonClick = event => {
      onChangePage(event, +page + 1);
   };

   const handleInputChange = event => {
      if (Number(event.target.value) <= totalPage) {
         onChangePage(event, event.target.value);
      }
   };

   return (
      <Center mt={3}>
         <IconButton disabled={page <= 1} onClick={handlePrevButtonClick}>
            <ArrowBackIosRounded sx={{ fontSize: "1.5rem" }} />
         </IconButton>

         <Stack direction={"row"} gap={2} alignItems={"center"} sx={{ mx: 2 }}>
            <Typography variant="body1">Page</Typography>
            <SimpleInput
               sx={{ width: "75px", backgroundColor: "common.white" }}
               value={page}
               onChange={handleInputChange}
            />
            <Typography variant="body1">{`of ${totalPage}`}</Typography>
         </Stack>
         <IconButton disabled={page >= totalPage} onClick={handleNextButtonClick}>
            <ArrowForwardIosRounded sx={{ fontSize: "1.5rem" }} />
         </IconButton>
      </Center>
   );
};
