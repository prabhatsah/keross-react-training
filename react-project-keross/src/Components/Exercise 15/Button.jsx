export default function Button({ mode, Icon, disabled, children }) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  let modeClassList = "filled-button ";
  if (mode) {
    modeClassList = mode + "-button ";
  }
  let classList = "";
  if (Icon) {
    classList += "button-icon";
    modeClassList += "icon-button";
  }

  return (
    <>
      <button disabled={disabled} className={`button ${modeClassList}`}>
        {(mode || Icon) && (
          <span className={classList}>{Icon && <Icon />}</span>
        )}
        {children}
      </button>
    </>
  );
}
