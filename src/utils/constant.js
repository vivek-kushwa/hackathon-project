import {
  AssignmentRounded,
  CollectionsBookmarkRounded,
  EmojiEventsRounded,
  MenuBookRounded,
  VideogameAssetRounded,
} from "@mui/icons-material";

import _ from "lodash";

export const API_ERROR = "Something went wrong!";

export const PAGE_ICONS = {
  Courses: <CollectionsBookmarkRounded />,
  Modules: <MenuBookRounded />,
  Projects: <VideogameAssetRounded />,
  Assessments: <AssignmentRounded />,
  Skills: <EmojiEventsRounded />,
};

export const _differenceBwObj = (obj1, obj2) => {
  return _.pickBy(obj1, (value, key) => !_.isEqual(obj2[key], value));
};

export const fileToFormData = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("fileName", file.name);
  return formData;
};

export const removeCheckboxStyle = {
  mr: 0,
  fontSize: "1.2rem",
  ".MuiFormControlLabel-root": {
    m: 0,
  },
  "&.Mui-checked .MuiSvgIcon-root": {
    bgcolor: "secondary.light",
    borderRadius: 0.5,
    color: "common.white",
  },
};

export const styleTableCell = {
  p: 1.8,
  textAlign: "left",
  color: "primary.mediumLight",
  textTransform: "capitalize",
  fontFamily: "Proxima_Nova-SemiBold",
};

export const queryPath = ({ page, pageSize = 9, sortBy, state, name }) => {
  var query = "?";
  if (page && pageSize) {
    query = query + `${page ? `page=${page}&pageSize=${pageSize}&` : ""}`;
  }

  if (sortBy) {
    query += `${sortBy ? `sortBy=${sortBy}&` : ""}`;
  }

  if (state) {
    query = query + `${state ? `state=${state}&` : ""}`;
  }
  if (name) {
    query = query + `${name ? `name=${name}` : ""}`;
  }

  return query;
};

export const sortText = (text) => {
  return text?.length > 20 ? `${text?.substring(0, 25)}...` : text;
};

export const __TOKEN =
  "eyJraWQiOiJOR1M3Z1dzSkt5OWRybUNIRTVxU1B0eTdhbDMzaHJ0NGMza2FJaThxc3g0PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiT2hITWU4UnI2LWFHS1o2T2p0ZGJhQSIsInN1YiI6IjQ1MjQ4OGU5LTBlMzUtNDJmZi04YTYwLTg1OWM2ZGZhMjhmZCIsImNvZ25pdG86Z3JvdXBzIjpbImFwLXNvdXRoLTFfMnhEcjVIbWZKX0dvb2dsZSJdLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLXNvdXRoLTEuYW1hem9uYXdzLmNvbVwvYXAtc291dGgtMV8yeERyNUhtZkoiLCJjb2duaXRvOnVzZXJuYW1lIjoiR29vZ2xlXzEwMzExMTA3MjYxNjE3OTE4MjIyNCIsIm5vbmNlIjoibkl6NWc2NFNTTTJGYXNJb2NvcWs2YUVQNlZpNkpfUlNDSWtvZHNGdmxfenJZMmJOSWZGMXZ1RnhpQkZNSmZJbVY5M3pWWUZiaUFyZUl5a2lBaUNlMWtWMloyQ1NTc0tlOGs3MjBpbUQxY0Rid1VhYzJyWHVUQk1pcVJkdzhoandkM2taZ2lpdVBXN3NwYXprZEtvbTBjb2drVVpUQmhDS2ZjbV9hVlNDY1E0IiwicGljdHVyZSI6Imh0dHBzOlwvXC9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXC9hXC9BQWNIVHRldTZLZXRjMVNNclVISU1VeHlPSUxJckxJLXMwY1lYSGh5d3EtRz1zOTYtYyIsImN1c3RvbTp1c2VySWQiOiJhZGZiNTYyMi1jZDcyLTRiN2EtOTc4Zi1iNjM3MjU5OTAzNDciLCJvcmlnaW5fanRpIjoiN2ZlZGFhZTctYjM4MS00NTE0LWJlNDktODU2OTc5NWI2ZGM0IiwiYXVkIjoiNzE1b2V0djlvMmY0anVnZjZ0bzd1ODdyMHIiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMDMxMTEwNzI2MTYxNzkxODIyMjQiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjc2NDY5Nzg5Nzg1In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4NjAzMDg2NywibmFtZSI6IlZpdmVrIEt1c2h3YWgiLCJleHAiOjE2ODYwMzQ0NjcsImlhdCI6MTY4NjAzMDg2NywianRpIjoiNjlmYmVmNWMtZWEyZC00Nzg0LTgyMDUtY2ZmYTg3ZGVhNmM4IiwiZW1haWwiOiJ2aXZlay5rQGFudGluby5pbyJ9.LxS-8srsajiHuxPxzU8nOUMk3d4KWEvgAkwo6ilglBDX1ft5xOO8vtuQqa-KqMG_lJ6aolnfBjbuMTUjFDeQKpZuST9P4DJRjCiIfDjEKeoYqe7_oQKA6UlD98HvhOKF2N1JG2gR5xI9EygK8ou82medAiY8JptJDADhPJxQ7FQXN0j3ILmAqOyBaTXo6TQrgI-rJSCrS5Co4svI8rxvUHdpjwH4G2tew-ypz2x87b-A_I6rS8-YeMYs-nPK0ccpgV9Rh2xT35a2j-v6YrdIxMj45notUI6V4zMk3Xe7VJ3i-J4jTNCJ3XkQgHH72tc3dgA19Tlg2gX3HfMxdgswRQ";

