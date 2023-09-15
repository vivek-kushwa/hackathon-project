import { Grid, InputAdornment } from "@mui/material";
import { FormLabel, Select, SimpleInput } from "components/Form";
import React from "react";

export const Duration = ({
  errors,
  touched,
  values,
  handleChange,
  setFieldValue,
  isViewOnly,
  title,
}) => {
  return (
    <Grid item xs={12} container justifyContent="space-between">
      <Grid item xs={12}>
        <FormLabel
          label={title || "Duration"}
          error={
            (touched?.duration && !!errors?.duration) ||
            (touched?.problemTime && !!errors?.problemTime)
          }
        />
      </Grid>
      <Grid item xs={5.8}>
        <SimpleInput
          type="number"
          inputProps={{ min: "0", step: "1" }}
          fullWidth
          disabled={isViewOnly}
          name={"duSelectFirstNo"}
          onChange={(e) => {
            handleChange(e);
            setFieldValue(
              "duration",
              `${e.target.value} ${values?.duSelectFirstStr} ${
                values?.duSelectSecondNo
                  ? `${values?.duSelectSecondNo} ${values?.duSelectSecondStr}`
                  : ""
              }`
            );
          }}
          value={values?.duSelectFirstNo}
          error={
            (touched?.duSelectFirstNo && !!errors?.duSelectFirstNo) ||
            (touched?.duration && !!errors?.duration) ||
            (touched?.problemTime && !!errors?.problemTime)
          }
          endAdornment={
            <InputAdornment
              position="end"
              sx={{
                width: "75%",
                marginRight: "0px !important",
              }}
            >
              <Select
                sx={{
                  "& .MuiInputBase-input": {
                    backgroundColor: "#F7F7F7 !important",
                    borderRadius: "0px !important",
                    borderRight: "0 !important",
                    borderTop: "0 !important",
                    borderBottom: "0 !important",
                  },
                }}
                disabled={isViewOnly}
                options={[
                  {
                    value: "months",
                    label: "Months",
                  },
                  { value: "weeks", label: "Weeks" },
                  { value: "days", label: "Days" },
                  { value: "hours", label: "Hours" },
                  { value: "minutes", label: "Minutes" },
                ]}
                name={"duSelectFirstStr"}
                onChange={(e) => {
                  handleChange(e);
                  setFieldValue(
                    "duration",
                    `${values?.duSelectFirstNo} ${e.target.value}`
                  );
                  if (e.target.value === "months") {
                    setFieldValue("duSelectSecondStr", `weeks`);
                  } else if (e.target.value === "weeks") {
                    setFieldValue("duSelectSecondStr", `days`);
                  } else if (e.target.value === "days") {
                    setFieldValue("duSelectSecondStr", `hours`);
                  } else if (e.target.value === "hours") {
                    setFieldValue("duSelectSecondStr", `minutes`);
                  } else {
                    setFieldValue("duSelectSecondStr", ``);
                  }
                }}
                value={values?.duSelectFirstStr}
                error={touched?.duSelectFirstStr && !!errors?.duSelectFirstStr}
              />
            </InputAdornment>
          }
        />
      </Grid>

      {values?.duSelectFirstStr !== "minutes" &&
        (isViewOnly ? (
          values?.duSelectSecondNo && (
            <Grid item xs={5.8}>
              <SimpleInput
                type="number"
                inputProps={{ min: "0", step: "1" }}
                fullWidth
                disabled={
                  isViewOnly ||
                  (!values?.duSelectFirstNo && !values?.duSelectSecondNo) ||
                  values?.duSelectFirstStr === "minutes"
                }
                name={"duSelectSecondNo"}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value) {
                    setFieldValue(
                      "duration",
                      `${values?.duSelectFirstNo} ${values?.duSelectFirstStr} ${e.target.value} ${values?.duSelectSecondStr}`
                    );
                  } else {
                    setFieldValue(
                      "duration",
                      `${values?.duSelectFirstNo} ${values?.duSelectFirstStr}`
                    );
                  }
                }}
                value={values?.duSelectSecondNo}
                error={
                  (touched?.duSelectSecondNo && !!errors?.duSelectSecondNo) ||
                  (touched?.duration && !!errors?.duration) ||
                  (touched?.problemTime && !!errors?.problemTime)
                }
                endAdornment={
                  <InputAdornment
                    position="end"
                    sx={{
                      width: "75%",
                      marginRight: "0px !important",
                    }}
                  >
                    <Select
                      sx={{
                        "& .MuiInputBase-input": {
                          backgroundColor: "#F7F7F7 !important",
                          borderRadius: "0px !important",
                          borderRight: "0 !important",
                          borderTop: "0 !important",
                          borderBottom: "0 !important",
                        },
                      }}
                      disabled={isViewOnly || !values?.duSelectFirstNo}
                      name={"duSelectSecondStr"}
                      options={[
                        {
                          value: "months",
                          label: "Months",
                          disabled:
                            values?.duSelectFirstStr === "hours" ||
                            values?.duSelectFirstStr === "minutes" ||
                            values?.duSelectFirstStr === "days" ||
                            values?.duSelectFirstStr === "weeks" ||
                            values?.duSelectFirstStr === "months",
                        },
                        {
                          value: "weeks",
                          label: "Weeks",
                          disabled:
                            values?.duSelectFirstStr === "hours" ||
                            values?.duSelectFirstStr === "minutes" ||
                            values?.duSelectFirstStr === "days" ||
                            values?.duSelectFirstStr === "weeks",
                        },
                        {
                          value: "days",
                          label: "Days",
                          disabled:
                            values?.duSelectFirstStr === "hours" ||
                            values?.duSelectFirstStr === "minutes" ||
                            values?.duSelectFirstStr === "days",
                        },
                        {
                          value: "hours",
                          label: "Hours",
                          disabled:
                            values?.duSelectFirstStr === "minutes" ||
                            values?.duSelectFirstStr === "hours",
                        },
                        {
                          value: "minutes",
                          label: "Minutes",
                          disabled: values?.duSelectFirstStr === "minutes",
                        },
                      ]}
                      onChange={(e) => {
                        if (values?.duSelectSecondNo) {
                          setFieldValue(
                            "duration",
                            `${values?.duSelectFirstNo} ${values?.duSelectFirstStr} ${values?.duSelectSecondNo} ${e.target.value}`
                          );
                        } else {
                          setFieldValue(
                            "duration",
                            `${values?.duSelectFirstNo} ${values?.duSelectFirstStr}`
                          );
                        }
                        handleChange(e);
                      }}
                      value={
                        values?.duSelectSecondStr
                          ? values?.duSelectSecondStr
                          : values?.duSelectFirstStr === "months"
                          ? "weeks"
                          : values?.duSelectFirstStr === "weeks"
                          ? "days"
                          : values?.duSelectFirstStr === "days"
                          ? "hours"
                          : "minutes"
                      }
                      error={
                        touched?.duSelectSecondStr &&
                        !!errors?.duSelectSecondStr
                      }
                    />
                  </InputAdornment>
                }
              />
            </Grid>
          )
        ) : (
          <Grid item xs={5.8}>
            <SimpleInput
              type="number"
              inputProps={{ min: "0", step: "1" }}
              fullWidth
              disabled={
                isViewOnly ||
                (!values?.duSelectFirstNo && !values?.duSelectSecondNo) ||
                values?.duSelectFirstStr === "minutes"
              }
              name={"duSelectSecondNo"}
              onChange={(e) => {
                handleChange(e);
                if (e.target.value) {
                  setFieldValue(
                    "duration",
                    `${values?.duSelectFirstNo} ${values?.duSelectFirstStr} ${
                      e.target.value
                    } ${
                      values?.duSelectSecondStr
                        ? values?.duSelectSecondStr
                        : values?.duSelectFirstStr === "months"
                        ? "weeks"
                        : values?.duSelectFirstStr === "weeks"
                        ? "days"
                        : values?.duSelectFirstStr === "days"
                        ? "hours"
                        : "minutes"
                    }`
                  );
                } else {
                  setFieldValue(
                    "duration",
                    `${values?.duSelectFirstNo} ${values?.duSelectFirstStr}`
                  );
                }
              }}
              value={values?.duSelectSecondNo}
              error={
                (touched?.duration && !!errors?.duration) ||
                (touched?.problemTime && !!errors?.problemTime)
              }
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{
                    width: "75%",
                    marginRight: "0px !important",
                  }}
                >
                  <Select
                    sx={{
                      "& .MuiInputBase-input": {
                        backgroundColor: "#F7F7F7 !important",
                        borderRadius: "0px !important",
                        borderRight: "0 !important",
                        borderTop: "0 !important",
                        borderBottom: "0 !important",
                      },
                    }}
                    disabled={isViewOnly || !values?.duSelectFirstNo}
                    name={"duSelectSecondStr"}
                    options={[
                      {
                        value: "months",
                        label: "Months",
                        disabled:
                          values?.duSelectFirstStr === "hours" ||
                          values?.duSelectFirstStr === "minutes" ||
                          values?.duSelectFirstStr === "days" ||
                          values?.duSelectFirstStr === "weeks" ||
                          values?.duSelectFirstStr === "months",
                      },
                      {
                        value: "weeks",
                        label: "Weeks",
                        disabled:
                          values?.duSelectFirstStr === "hours" ||
                          values?.duSelectFirstStr === "minutes" ||
                          values?.duSelectFirstStr === "days" ||
                          values?.duSelectFirstStr === "weeks",
                      },
                      {
                        value: "days",
                        label: "Days",
                        disabled:
                          values?.duSelectFirstStr === "hours" ||
                          values?.duSelectFirstStr === "minutes" ||
                          values?.duSelectFirstStr === "days",
                      },
                      {
                        value: "hours",
                        label: "Hours",
                        disabled:
                          values?.duSelectFirstStr === "minutes" ||
                          values?.duSelectFirstStr === "hours",
                      },
                      {
                        value: "minutes",
                        label: "Minutes",
                        disabled: values?.duSelectFirstStr === "minutes",
                      },
                    ]}
                    onChange={(e) => {
                      if (values?.duSelectSecondNo) {
                        setFieldValue(
                          "duration",
                          `${values?.duSelectFirstNo} ${values?.duSelectFirstStr} ${values?.duSelectSecondNo} ${e.target.value}`
                        );
                      } else {
                        setFieldValue(
                          "duration",
                          `${values?.duSelectFirstNo} ${values?.duSelectFirstStr}`
                        );
                      }
                      handleChange(e);
                    }}
                    value={
                      values?.duSelectSecondStr
                        ? values?.duSelectSecondStr
                        : values?.duSelectFirstStr === "months"
                        ? "weeks"
                        : values?.duSelectFirstStr === "weeks"
                        ? "days"
                        : values?.duSelectFirstStr === "days"
                        ? "hours"
                        : "minutes"
                    }
                    error={
                      touched?.duSelectSecondStr && !!errors?.duSelectSecondStr
                    }
                  />
                </InputAdornment>
              }
            />
          </Grid>
        ))}
    </Grid>
  );
};

export const TimeLimit = ({
  errors,
  touched,
  values,
  handleChange,
  setFieldValue,
  isViewOnly,
  fieldName,
  title,
}) => {
  return (
    <Grid item xs={5.8} container justifyContent="space-between">
      <Grid item xs={12}>
        <FormLabel label={title || "Duration"} />
      </Grid>
      <Grid item xs={12}>
        <SimpleInput
          type="number"
          inputProps={{ min: "0", step: "1" }}
          fullWidth
          width={"50%"}
          disabled={isViewOnly}
          name={"duSelectFirstNo"}
          onChange={(e) => {
            handleChange(e);
            setFieldValue(
              fieldName,
              `${e.target.value} ${values?.duSelectFirstStr}`
            );
          }}
          value={values?.duSelectFirstNo}
          error={
            (touched?.duSelectFirstNo && !!errors?.duSelectFirstNo) ||
            (touched[fieldName] && !!errors[fieldName]) ||
            (touched?.duSelectFirstStr && !!errors?.duSelectFirstStr)
          }
          endAdornment={
            <InputAdornment
              position="end"
              sx={{ width: "75%", marginRight: "0px !important" }}
            >
              <Select
                sx={{
                  "& .MuiInputBase-input": {
                    backgroundColor: "#F7F7F7 !important",
                    borderRadius: "0px !important",
                    borderRight: "0 !important",
                    borderTop: "0 !important",
                    borderBottom: "0 !important",
                  },
                }}
                disabled={isViewOnly}
                options={[
                  {
                    value: "select_limit",
                    label: "Select Limit",
                    disabled: true,
                  },
                  {
                    value: "months",
                    label: "Months",
                  },
                  { value: "weeks", label: "Weeks" },
                  { value: "days", label: "Days" },
                  { value: "hours", label: "Hours" },
                  { value: "minutes", label: "Minutes" },
                ]}
                name={"duSelectFirstStr"}
                onChange={(e) => {
                  handleChange(e);
                  setFieldValue(
                    fieldName,
                    `${values?.duSelectFirstNo} ${e.target.value}`
                  );
                }}
                value={values?.duSelectFirstStr || "select_limit"}
              />
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};

export const RetakeDuration = ({
  errors,
  touched,
  values,
  handleChange,
  setFieldValue,
  isViewOnly,
  fieldName,
}) => {
  return (
    <Grid item xs={5.8} container justifyContent="space-between">
      <Grid item xs={12}>
        <FormLabel label={"Duration Between Retakes"} />
      </Grid>
      <Grid item xs={12}>
        <SimpleInput
          type="number"
          inputProps={{ min: "0", step: "1" }}
          fullWidth
          width={"50%"}
          disabled={isViewOnly}
          name={"duRetakeFirstNo"}
          onChange={(e) => {
            handleChange(e);
            setFieldValue(
              fieldName,
              `${e.target.value} ${values?.duRetakeFirstStr}`
            );
          }}
          value={values?.duRetakeFirstNo}
          error={
            (touched?.duRetakeFirstNo && !!errors?.duRetakeFirstNo) ||
            (touched?.duration && !!errors?.duration)
          }
          endAdornment={
            <InputAdornment
              position="end"
              sx={{ width: "75%", marginRight: "0px !important" }}
            >
              <Select
                sx={{
                  "& .MuiInputBase-input": {
                    backgroundColor: "#F7F7F7 !important",
                    borderRadius: "0px !important",
                    borderRight: "0 !important",
                    borderTop: "0 !important",
                    borderBottom: "0 !important",
                  },
                }}
                disabled={isViewOnly}
                options={[
                  {
                    value: "retake_duration",
                    label: "Retake Duration",
                    disabled: true,
                  },
                  {
                    value: "months",
                    label: "Months",
                  },
                  { value: "weeks", label: "Weeks" },
                  { value: "days", label: "Days" },
                  { value: "hours", label: "Hours" },
                  { value: "minutes", label: "Minutes" },
                ]}
                name={"duRetakeFirstStr"}
                onChange={(e) => {
                  handleChange(e);
                  setFieldValue(
                    fieldName,
                    `${values?.duRetakeFirstNo} ${e.target.value}`
                  );
                }}
                value={values?.duRetakeFirstStr || "retake_duration"}
                error={touched?.duRetakeFirstStr && !!errors?.duRetakeFirstStr}
              />
            </InputAdornment>
          }
        />
      </Grid>
    </Grid>
  );
};
