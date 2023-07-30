function ButtonHero({ icon, text, style }) {
  return (
    <button className={style}>
      {icon}
      {text}
    </button>
  );
}

export default ButtonHero;
