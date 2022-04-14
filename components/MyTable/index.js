import React, { useEffect } from "react";
import ReactTable from "react-table";

const MyTable = () => {
  const data = [
    {
      supervisor: "Ayaan",
      age: 26,
      Session: "Group Therapy",
      MeetingLink: "http://www.xyz.mc",
      type: "open",
    },
    {
      supervisor: "Ahana",
      age: 22,
      Session: "Group Therapy",
      MeetingLink: "http://www.xyz21.mc",
      type: "closed",
    },
    {
      supervisor: "Peter",
      age: 40,
      Session: "Group Therapy",
      MeetingLink: "http://www.xyz2.mc",
      type: "invite-only",
    },
    {
      supervisor: "Virat",
      age: 30,
      Session: "Group Therapy",
      MeetingLink: "http://www.xyez.mc",
      type: "open",
    },
    {
      supervisor: "Rohit",
      age: 32,
      Session: "Group Therapy",
      MeetingLink: "http://www.xyzd.mc",
      type: "invite-only",
    },
    {
      supervisor: "Dhoni",
      age: 37,
      session: "Group Therapy",
      meetingLink: "http://www.xyz.mc",
      type: "open",
    },
  ];

  const columns = [
    {
      Header: "Supervisor",
      accessor: "supervisor",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Session",
      accessor: "session",
    },
    {
      Header: "MeetingLink",
      accessor: "meetingLink",
    },
    {
      Header: "Status",
      accessor: "type",
    },
  ];
  useEffect(() =>{
    console.log(<ReactTable/>);
  })
  return (
    <div>
     ?
    </div>
  );
};

export default MyTable;
