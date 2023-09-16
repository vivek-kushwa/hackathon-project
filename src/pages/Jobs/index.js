import { Box } from "@mui/material";
import { Center, ColumnCenter, Tabs } from "components";
import React, { useState } from "react";
import JobCard from "./Card";

const Jobs = () => {
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <ColumnCenter p={"3rem"}>
      <Tabs
        tabTypes={[
          {
            label: " ALL",
            id: "",
          },
          {
            label: "APPLIED",
            id: "applied",
          },
          {
            label: "SAVED",
            id: "saved",
          },
        ]}
        selectedTab={selectedTab}
        handleChange={(_, value) => {
          setSelectedTab(value);
        }}
      />

      <Center mt={"4rem"} gap={"3rem"}>
        <JobCard />
      </Center>
    </ColumnCenter>
  );
};

export default Jobs;
