import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import Server from './server'
import React, { useState, useEffect } from 'react'
const initialDataState = {
  skip: 0,
  take: 10,
};

function App() {
  const server = new Server()
  const [page, setPage] = useState(initialDataState);
  const [data, setData] = useState({data:[],total:0});

  const pageChange = (event) => {
    setPage(event.page);
  };
  const getData = ()=>{
    const data = server.get({pageKey:page.skip/page.take + 1,pageSize:page.take})
    setData(data)
  }
  useEffect(()=>{
    getData()
  },[page])
  return (
    <div className="App">
      <Grid
        data={data.data}
        style={{height: "400px"}}
        scrollable={true}
        pageable={true}
        sortable={true}
        skip={page.skip}
        take={page.take}
        total={data.total}
        onPageChange={pageChange}
      >
        <GridColumn field="ProductName" title="Product Name"/>
        <GridColumn field="UnitPrice" title="Unit Price" format=""/>
        <GridColumn field="UnitsInStock"  title="Units In Stock"/>
        <GridColumn field="Discontinued"  title="Discontinued"/>
      </Grid>
    </div>
  );
}

export default App;
