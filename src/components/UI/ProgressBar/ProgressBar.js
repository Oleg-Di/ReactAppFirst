import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  let shadow;
  if (completed <= 20) shadow = '0 0 0.5rem 0.1rem rgb(111, 156, 163)';
  if (completed > 20 && completed <= 50) shadow = '0 0 0.5rem 0.3rem rgb(111, 156, 163)';
  if (completed > 50 &&  completed <= 80) shadow = '0 0 0.5rem 0.5rem rgb(111, 156, 163)';
  if (completed > 80 && completed <= 100) shadow = '0 0 0.6rem 0.8rem rgb(111, 156, 163)';

  const containerStyles = {
    height: '1.5rem',
    width: '90%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: '2rem',
    border: '0.2rem solid rgb(79, 126, 133)',
    boxShadow: `${shadow}`,
    transition: '.7s'
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: '.7s'
  }

  const labelStyles = {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
  return (
    <div style={containerStyles}>
    <div style={fillerStyles}>
      <span style={labelStyles}>{`${completed}%`}</span>
    </div>
    {completed === 100? <h3>Well done!</h3>: null}
  </div>
  );
};

export default ProgressBar;