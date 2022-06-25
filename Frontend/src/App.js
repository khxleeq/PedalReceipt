import React, { Component } from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL: `http://http://localhost:5000/api/receipt/`
})


export default App;
