export async function main() {
  let boxes = Array.from(
    eval("document").querySelectorAll("[class*=MuiBox-root]")
  );
  let box = boxes.find((x) => hasPlayer(x));

  if (box) {
    let props = getProps(box);
    props.router.toDevMenu();
  }
}

function getProps(obj) {
  return Object.entries(obj).find((entry) =>
    entry[0].startsWith("__reactProps")
  )[1].children.props;
}

function hasPlayer(obj) {
  try {
    return !!getProps(obj).player;
  } catch (err) {
    return false;
  }
}
