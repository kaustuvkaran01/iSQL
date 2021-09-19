import React, { forwardRef, useContext } from "react";
import { SQLContext } from "../Context";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
// import CloseIcon from "@material-ui/icons/Close";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const TableDetails = () => {
  const { modalOpen, setModalOpen } = useContext(SQLContext);

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <TableDetailStyled
      open={modalOpen}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="sm"
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="details-title"
      aria-describedby="details-description"
    >
      <div className="details-container">
        <div id="details-title" className="details-title">
          <TableChartOutlinedIcon className="details-title-icon" />
          <span>ADD ANOTHER TABLE</span>
          <IconButton
            aria-label="close"
            className="details-title-close"
            onClick={handleClose}
          >
            {/* <CloseIcon /> */}
          </IconButton>
        </div>

        <div id="details-content" className="details-content">
          <div>
          <input type="file" name="Upload file"/>
          </div>
          <div>
          <Button className="submit-btn" type="submit">Submit</Button>
          </div>
        </div>
      </div>
    </TableDetailStyled>
  );
};

const TableDetailStyled = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 20px;
  }
  .submit-btn{
    background: var(--primary-color);
    borderRadius:24px;
    marginTop:4px;
    color:white;
    &:hover{
      background:var(--sidebar-dark-color);
    }
  }
  .details-container {
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    background-color: var(--editor-color);
    .details-title {
      display: flex;
      background-color: var(--sidebar-dark-color);
      align-items: center;
      justify-content: center;
      padding: 2rem;
      position: relative;
      color: var(--font-light-color);
      .details-title-icon {
        font-size: 1.8rem;
        margin-right: 0.5rem;
      }
      span {
        font-size: 1.6rem;
        @media screen and (max-width: 576px) {
          font-size: 1.4rem;
        }
      }
      .details-title-close {
        position: absolute;
        color: var(--font-light-color);
        right: 1rem;
      }
    }
    .details-content {
      padding: 2rem;
      margin-left: 5rem;
      @media screen and (max-width: 576px) {
        margin-left: 0.3rem;
      }
      div {
        font-size: 1.1rem;
        @media screen and (max-width: 576px) {
          font-size: 1rem;
        }
        display: flex;
        margin: 0.3rem;
        .details-field {
          width: 50%;
          color: var(--primary-color);
        }
        .details-state {
          color: var(--white-color);
          width: 50%;
          span {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`;

export default TableDetails;