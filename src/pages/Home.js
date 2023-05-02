import React, { useState } from "react";

import SearchInput from "../comonents/SearchInput";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  const [know , setKnow] = useState(false)
  const navigate = useNavigate()
  return (
    <div className="main_div">
      <div className="myapp">
       
      </div>
      <div className="listLink">
        <div className="myName">
          <span onClick={() =>navigate('/favorite_list')}> favorite package list </span>
        </div>
       
      </div>
      <div className="searchBox">
        <h2>Search for NPM Packages</h2>
        <SearchInput placeholder="Search NPM Packages" />
      </div>
    </div>
  );
}