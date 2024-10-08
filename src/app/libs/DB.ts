import _ from "lodash";

export const DB = {
  students: [
    {
      studentId: "650610001",
      firstName: "Matt",
      lastName: "Damon",
      program: "CPE",
    },
    {
      studentId: "650610002",
      firstName: "Cillian",
      lastName: "Murphy",
      program: "CPE",
    },
    {
      studentId: "650610003",
      firstName: "Emily",
      lastName: "Blunt",
      program: "ISNE",
    },
  ],
};

export const originalDB = _.cloneDeep(DB);