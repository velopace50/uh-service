import React from 'react';

type BtnProps = {
  label: string;
  bg_color: String;
  font_size: String;
  padding: String;
  border: String;
  hover: String;
};

const Button: React.FC<BtnProps> = (props) => {
  const { label, bg_color, font_size, padding, border, hover } = props;
  const classes = `${bg_color} ${font_size} ${padding} ${border} ${hover} text-white`;

  return <button className={classes}>{label}</button>;
};

export default Button;
