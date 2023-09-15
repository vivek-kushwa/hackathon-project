import { Stack, styled } from "@mui/system";

export const SpaceBetween = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SpaceAround = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
});

export const AlignLeft = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
});

export const AlignRight = styled(Stack)({
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const Center = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const ColumnCenter = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
});
