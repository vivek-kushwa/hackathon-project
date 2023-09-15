import * as React from "react";
import { Tabs as MuiTabs, Tab } from "@mui/material";
import Box from "@mui/material/Box";

export function Tabs({ handleChange, tabTypes = [], selectedTab = 0 }) {
  return (
    <Box>
      <MuiTabs
        value={selectedTab}
        onChange={handleChange}
        indicatorColor="secondary"
        sx={{
          "& .MuiTabs-flexContainer": {
            gap: 3,
          },
        }}
        TabIndicatorProps={{
          style: { borderRadius: 3, height: 3 },
        }}
      >
        {tabTypes.map((tab) => (
          <Tab
            value={tab.id}
            key={tab.id}
            label={tab?.label}
            sx={{
              fontSize: 18,
              textTransform: "none",
              fontWeight: 500,
              color: "primary.active",
            }}
          />
        ))}
      </MuiTabs>
    </Box>
  );
}

export function TabsWithButton({
  handleChange,
  tabTypes = [],
  selectedTab = 0,
}) {
  return (
    <MuiTabs
      value={selectedTab}
      onChange={handleChange}
      indicatorColor="secondary"
      sx={{
        alignItems: "center",
        "& .MuiTabs-flexContainer": {
          gap: 3,
        },
        button: {
          color: "primary.main",
          fontFamily: "Proxima_Nova-Regular",
          borderRadius: 1,
          fontSize: "14px",
          p: "8px 10px",
          minWidth: "144px",
          height: "33px",
          minHeight: "auto",
          boxSizing: "border-box",
          lineHeight: 1,
          "&.Mui-selected": {
            bgcolor: "primary.main",
            color: "common.white",
          },
        },
      }}
      TabIndicatorProps={{
        style: { borderRadius: 3, height: 0 },
      }}
    >
      {tabTypes.map((tab) => (
        <Tab
          value={tab.id}
          key={tab.id}
          label={tab?.label}
          sx={{
            fontSize: 18,
            textTransform: "capitalize",
            bgcolor: "neutrals.300",
          }}
        />
      ))}
    </MuiTabs>
  );
}
