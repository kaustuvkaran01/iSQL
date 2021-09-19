import React, { useContext, Suspense, lazy } from "react";
import styled from "styled-components";
import { SQLContext } from "../Context";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import { CSVLink } from "react-csv";
import data from "../data/customers.json";
import data2 from "../data/customers2.json";
import data3 from "../data/customers3.json";
import Tooltip from "@material-ui/core/Tooltip";
import Loading from "./Editor/Loading";

const OutputTable = lazy(() => import("./OutputTable"));

const Output = () => {
  const { dataOption } = useContext(SQLContext);

  return (
    <OutputStyled>
      <div className="output-pane">
        <div className="output-container">
          <div className="output-title">
            Output{" "}
            {dataOption === "data" && <DownloadCSV dataToDownload={data} />}
            {dataOption === "data2" && <DownloadCSV dataToDownload={data2} />}
            {dataOption === "data3" && <DownloadCSV dataToDownload={data3} />}
          </div>
          <div className="output-wrapper">
            {dataOption === "data" && (
              <Suspense fallback={<Loading />}>
                <OutputTable data={data} />
              </Suspense>
            )}
            {dataOption === "data2" && (
              <Suspense fallback={<Loading />}>
                <OutputTable data={data2} />
              </Suspense>
            )}
            {dataOption === "data3" && (
              <Suspense fallback={<Loading />}>
                <OutputTable data={data3} />
              </Suspense>
            )}
            {dataOption === "noQuery" && (
              <div className="primary-text">
                Please enter some valid queries from the examples given.
              </div>
            )}
            {dataOption === "" && (
              <>
                <div>Execute some sample queries,</div>
                <br />
                <div className="output-queries">
                  <div>Example: </div>
                  <div className="output-queries-example">
                    <div>SELECT * FROM Customers</div>
                    <div>SELECT ContactName, City, Country FROM Customers</div>
                    <div>SELECT * FROM Customers WHERE Country="Germany"</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </OutputStyled>
  );
};

const DownloadCSV = ({ dataToDownload }) => {
  return (
    <Tooltip title="Download CSV">
      <CSVLink data={dataToDownload} filename={"customers.csv"}>
        <GetAppOutlinedIcon />
      </CSVLink>
    </Tooltip>
  );
};

const OutputStyled = styled.div`
  flex-grow: 1;
  margin: 0 1rem 1.5rem 1rem;
  .output-pane {
    height: 100%;
    display: flex;
  }
  .output-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .output-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--sidebar-dark-color);
    padding: 1rem;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
    border-bottom: 1px solid var(--border-color);
  }
  .output-wrapper {
    flex-grow: 1;
    background-color: var(--sidebar-dark-color);
    position: relative;
    transition: all 0.3s ease;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    padding: 1rem;
    color: var(--font-light-color);
    .output-queries {
      display: flex;
      .output-queries-example {
        margin-left: 1rem;
        color: var(--primary-color);
        div {
          margin-bottom: 0.5rem;
          font-size: 1rem;
        }
      }
    }
  }
`;

export default Output;