import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, colors } from "@mui/material";
import { Search } from "@mui/icons-material";
import styles from '../UI/UI.module.css';
const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSubmission = (event) => {
        event.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };
  return (
    <Paper
      component="form"
      onSubmit={handleSubmission}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input 
        className={styles['search-bar']}
        placeholder="Search"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
